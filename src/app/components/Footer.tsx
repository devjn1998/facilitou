import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Sobre Nós</h3>
            <p className="text-gray-100 leading-relaxed hover:bg-blue-700">
              Conectamos estabelecimentos e consumidores de forma simples e
              eficiente. Facilitamos o cadastro, gestão de produtos e automação
              de vendas, garantindo uma experiência digital ágil e transparente.
              ✨🚀
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/termos"
                  className="text-gray-100 hover:bg-blue-700 transition duration-300"
                >
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-gray-100 hover:bg-blue-700 transition duration-300"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-100 hover:bg-blue-700 transition duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <p className="text-gray-100 hover:bg-blue-700 transition duration-300">
              📧 contato@meuecommerce.com
            </p>
            <p className="text-gray-100 hover:bg-blue-700 transition duration-300 mt-2">
              📱 (xx) xxxx-xxxx
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100/20 text-center">
          <p className="text-gray-100">
            &copy; 2023 Logo da Facilita. Todos os direitos reservados. 💫
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
