export default function InfoCalculation() {
  return (
    <div className="text-sm text-gray-600 pt-6 md:w-96 md:mx-auto">
      <h3 className="font-semibold mb-2">Como o cálculo é feito:</h3>
      <ol className="list-decimal list-inside space-y-1">
        <li>Multiplica-se o total de itens pelo preço por unidade</li>
        <li>Adiciona-se a porcentagem da maquininha ao resultado</li>
        <li>Soma-se o valor total do frete</li>
        <li>Aplica-se a porcentagem final ao subtotal</li>
      </ol>
    </div>
  );
}
