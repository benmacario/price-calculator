import { Suspense } from "react";

import Footer from "@/components/server/footer";
import FormPriceCalculator from "@/components/server/form-price-calculator";
import InfoCalculation from "@/components/server/info-calculation";

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow my-6 mx-3">
          <Suspense fallback={<div>Loading...</div>}>
            <FormPriceCalculator />
          </Suspense>
          <InfoCalculation />
        </main>
        <Footer />
      </div>
    </>
  );
}
