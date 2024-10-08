import { useState, useEffect } from "react";
import { useQueryState } from "nuqs";

import { priceCalculator } from "@/lib/price-calculator";

interface PriceTable {
  unitFreight: string;
  machinePercentage: string;
  unitPrice: string;
  appliedPercentage: string;
}

export const useCalculatedPrice = (): [PriceTable[] | null, string] => {
  const [totalItems] = useQueryState("total-item");
  const [freight] = useQueryState("frete");
  const [machineRate] = useQueryState("taxa-maquina");
  const [tableValue, setValueTable] = useState<PriceTable[] | null>(null);
  const [unitPrice] = useQueryState("preco-unidade");
  const [percentage] = useQueryState("porcentagem");
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    if (totalItems && freight && machineRate && unitPrice && percentage) {
      const valueCalculator = priceCalculator({
        totalItems,
        freight,
        machineRate,
        unitPrice,
        percentage,
      });

      setTotal(valueCalculator.newPrice);
      setValueTable([
        {
          unitFreight: `R$ ${valueCalculator.unitFreight.toFixed(2)}`,
          machinePercentage: `${machineRate}%`,
          unitPrice: `R$ ${parseFloat(unitPrice).toFixed(2)}`,
          appliedPercentage: `${percentage}%`,
        },
      ]);
    }
  }, [totalItems, freight, machineRate, unitPrice, percentage]);

  return [tableValue, total];
};
