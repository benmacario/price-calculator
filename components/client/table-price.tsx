"use client";

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

import { useCalculatedPrice } from "@/components/hooks/use-calculated-price";

export default function TablePrice() {
  const [tableValue, total] = useCalculatedPrice();

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
