import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ClientInputForms from "@/components/client/input-forms";
import PriceDrawerResult from "@/components/server/price-drawer-result";

export default function FormPriceCalculator() {
  return (
    <Card className="md:w-96 md:mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Calculadora de preço</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para calcular o preço de um produto.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ClientInputForms />
      </CardContent>
      <CardFooter>
        <PriceDrawerResult />
      </CardFooter>
    </Card>
  );
}
