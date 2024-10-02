import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import ClientInputForms from "@/components/client/input-forms";
import TablePrice from "@/components/server/table-price";

export default function FormPriceCalculator() {
  return (
    <Card className="w-full">
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
        <Drawer>
          <DrawerTrigger className="w-full">
            <label className={buttonVariants({ className: "w-full" })}>
              Calcular
            </label>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Preço sugerido</DrawerTitle>
              <DrawerDescription>
                Esse é o preço sugerido para o seu produto.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <TablePrice />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  );
}
