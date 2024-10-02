import FormPriceCalculator from "@/components/server/form-price-calculator";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="my-6 mx-3">
      <Suspense fallback={<div>Loading...</div>}>
        <FormPriceCalculator />
      </Suspense>
    </div>
  );
}
