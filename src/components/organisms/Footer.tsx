export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="flex text-sm text-gray-600 justify-center sm:text-center">
        © 2022 Painel. Todos os direitos reservados.
      </span>
      <ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-gray-600  sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Sobre
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Políticas
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licença
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </li>
      </ul>
    </footer>
  );
}
