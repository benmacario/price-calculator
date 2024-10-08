import { calculatorPercent } from "@/lib/calculator-percent";

interface PriceCalculator {
  totalItems: string;
  freight: string;
  machineRate: string;
  unitPrice: string;
  percentage: string;
}

export function priceCalculator({
  totalItems,
  freight,
  machineRate,
  unitPrice,
  percentage,
}: PriceCalculator) {
  const itemCount = parseInt(totalItems) === 0 ? 1 : parseInt(totalItems);
  const unitFreight = parseFloat(freight) / itemCount;
  const machineRateValue = calculatorPercent(machineRate);
  const appliedRate = calculatorPercent(percentage);

  const newPrice =
    Math.ceil(
      ((parseFloat(unitPrice) + unitFreight) / machineRateValue / appliedRate) *
        100,
    ) / 100;

  return {
    unitFreight,
    machineRate: machineRateValue,
    appliedRate,
    newPrice: newPrice.toFixed(2),
  };
}
