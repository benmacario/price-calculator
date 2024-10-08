import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
