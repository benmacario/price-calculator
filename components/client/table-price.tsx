"use client";

import { useQueryState } from "nuqs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface PriceCalculator {
  totalItens: string;
  frete: string;
  taxaMaquina: string;
  precoUnidade: string;
  porcentagem: string;
}

interface PriceTable {
  unitFreight: string;
  machinePercentage: string;
  unitPrice: string;
  appliedPercentage: string;
}

function calculatorPercent(value: string) {
  return 1 - Number(value) / 100;
}

function priceCalculator({
  totalItens,
  frete,
  taxaMaquina,
  precoUnidade,
  porcentagem,
}: PriceCalculator) {
  const totalFretePerUnit =
    parseFloat(frete) / parseInt(totalItens) === 0 ? 1 : parseInt(totalItens);
  const percentMachine = calculatorPercent(taxaMaquina);
  const porcentagemTotal = calculatorPercent(porcentagem);

  console.log(totalFretePerUnit);
  const newPrice =
    Math.ceil(
      ((parseFloat(precoUnidade) + totalFretePerUnit) /
        percentMachine /
        porcentagemTotal) *
        100,
    ) / 100;

  return {
    totalFretePerUnit,
    percentMachine,
    porcentagemTotal,
    newPrice: newPrice.toFixed(2),
  };
}

export default function TablePrice() {
  const [totalItens] = useQueryState("total-item");
  const [frete] = useQueryState("frete");
  const [taxaMaquina] = useQueryState("taxa-maquina");
  const [tableValue, setValueTable] = useState<PriceTable[]>();
  const [precoUnidade] = useQueryState("preco-unidade");
  const [porcentagem] = useQueryState("porcentagem");
  const [total, setTotal] = useState<string>();

  useEffect(() => {
    if (totalItens && frete && taxaMaquina && precoUnidade && porcentagem) {
      const valueCalculator = priceCalculator({
        totalItens,
        frete,
        taxaMaquina,
        precoUnidade,
        porcentagem,
      });

      setTotal(valueCalculator.newPrice);
      setValueTable([
        {
          unitFreight: `R$ ${valueCalculator.totalFretePerUnit.toFixed(2)}`,
          machinePercentage: `${taxaMaquina}%`,
          unitPrice: `R$ ${parseFloat(precoUnidade).toFixed(2)}`,
          appliedPercentage: `${porcentagem}%`,
        },
      ]);
    }
  }, [totalItens, frete, taxaMaquina, precoUnidade, porcentagem]);

  return (
    <Table>
      <TableCaption>
        Clique fora da tela para calcular um novo produto
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fr. Unidade</TableHead>
          <TableHead>% Maq</TableHead>
          <TableHead>% Aplicada</TableHead>
          <TableHead className="text-right">P.P. Unidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableValue?.map((invoice) => (
          <TableRow key={invoice.unitPrice}>
            <TableCell>{invoice.unitFreight}</TableCell>
            <TableCell>{invoice.machinePercentage}</TableCell>
            <TableCell>{invoice.appliedPercentage}</TableCell>
            <TableCell className="text-right">{invoice.unitPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="font-semibold">
            Preço final sugerido
          </TableCell>
          <TableCell className="text-right font-semibold">R$ {total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
