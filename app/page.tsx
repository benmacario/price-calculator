import FormPriceCalculator from "@/components/server/form-price-calculator";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <main className="my-6 mx-3 md:h-[calc(100vh-76px-48px)]">
        <Suspense fallback={<div>Loading...</div>}>
          <FormPriceCalculator />
        </Suspense>
        <div className="text-sm text-gray-600 pt-6 md:w-96 md:mx-auto">
          <h3 className="font-semibold mb-2">Como o cálculo é feito:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Multiplica-se o total de itens pelo preço por unidade</li>
            <li>Adiciona-se a porcentagem da maquininha ao resultado</li>
            <li>Soma-se o valor total do frete</li>
            <li>Aplica-se a porcentagem final ao subtotal</li>
          </ol>
        </div>
      </main>
      <footer className="w-full py-4 bg-gray-100">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center space-x-4 text-sm mb-2">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 font-light"
            >
              Sobre
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 font-light"
            >
              Termos
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 font-light"
            >
              Privacidade
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            &copy; 2024 Calculadora de Preço. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
