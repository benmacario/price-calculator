import TablePrice from "@/components/client/table-price";

import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function PriceDrawerResult() {
  return (
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
  );
}
