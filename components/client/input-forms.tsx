"use client";

import { useQueryState } from "nuqs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ClientInputForms() {
  const [totalItens, setTotalItens] = useQueryState("total-item");
  const [frete, setFrete] = useQueryState("frete");
  const [taxaMaquina, setTaxaMaquina] = useQueryState("taxa-maquina");
  const [precoUnidade, setPrecoUnidade] = useQueryState("preco-unidade");
  const [porcentagem, setPorcentagem] = useQueryState("porcentagem");

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="total-item">Total de itens comprados</Label>
        <Input
          id="total-item"
          value={totalItens || ""}
          onChange={(e) => setTotalItens(e.target.value)}
          type="number"
          placeholder="Ex: 200"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="frete">Valor total do frete</Label>
        <Input
          id="frete"
          value={frete || ""}
          onChange={(e) => setFrete(e.target.value)}
          type="number"
          placeholder="Ex: 100 ou 0"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="taxa-maquina">Porcentagem maquininha</Label>
        <Input
          id="taxa-maquina"
          value={taxaMaquina || ""}
          onChange={(e) => setTaxaMaquina(e.target.value)}
          type="number"
          placeholder="Ex: 5"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="preco-unidade">Preço por unidade</Label>
        <Input
          id="preco-unidade"
          value={precoUnidade || ""}
          onChange={(e) => setPrecoUnidade(e.target.value)}
          type="number"
          placeholder="Ex: 7.9"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="porcentagem">Porcentagem a ser aplicada</Label>
        <Input
          id="porcentagem"
          value={porcentagem || ""}
          onChange={(e) => setPorcentagem(e.target.value)}
          type="number"
          placeholder="Ex: 30"
          required
        />
      </div>
    </>
  );
}
