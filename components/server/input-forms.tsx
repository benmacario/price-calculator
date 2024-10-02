import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ServerInputForms() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="preco-unidade">Preço por unidade</Label>
        <Input
          id="preco-unidade"
          type="number"
          placeholder="Ex: 7.9"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="porcentagem">Porcentagem a ser aplicada</Label>
        <Input id="porcentagem" type="number" placeholder="Ex: 30" required />
      </div>
    </>
  );
}
