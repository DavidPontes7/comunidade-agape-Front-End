import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { faBars, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronDown } from 'react-icons/fa' // Importe o ícone apropriado, aqui estou usando o Font Awesome como exemplo

const products = [
  { name: 'Nossa História', href: "/History" },
  { name: 'Fundador e CoFundadora', href: '/fundador' },
  { name: 'Contato', href: '/contato' },
]

const callsToAction: any = []

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-r shadow-md">

      <nav className=" bg-transparent  mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto lg:hidden" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg leading-6 text-gray-900 hover:text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
              Sobre Nós
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586z" clipRule="evenodd" />
              </svg>

            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-64 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-300">
                <div className="py-2">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>

            </Transition>
          </Popover>
          <Link to="/news" className="relative text-lg font-medium leading-6 text-gray-900 hover:text-black transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-200 hover:after:w-full" style={{ fontFamily: 'Arial, sans-serif' }}>
            Notícias
          </Link>
          <Link to="/eventos" className="relative text-lg font-medium leading-6 text-gray-900 hover:text-black transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-200 hover:after:w-full" style={{ fontFamily: 'Arial, sans-serif' }}>
            Eventos
          </Link>
          <Link to="/formacao" className="relative text-lg font-medium leading-6 text-gray-900 hover:text-black transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-200 hover:after:w-full" style={{ fontFamily: 'Arial, sans-serif' }}>
            Formação
          </Link>
          <Link to="/liturgia-diaria" className="relative text-lg font-medium leading-6 text-gray-900 hover:text-black transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-200 hover:after:w-full" style={{ fontFamily: 'Arial, sans-serif' }}>
            Liturgia Diária
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
          <div className="relative text-gray-600">
            <input type="search" name="search" placeholder="Buscar..." className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbjFMWG5KakMwQjRmdnE0WFpHWHNxaFJDLWVzZ3xBQ3Jtc0ttV3FiNy1PdTFyck53ejdCZ0xSeWJBRmNVcXRMWFFKOVBGUFMzRHQ4V0tKRHJWNnptemRUZVV4SWh1QU0zRUtVYmhPbzBkTHJDOS0xbWZPd0NkZ2tzV1R1N1d6eElQYkJuc1NDaHZoX1paTXhZQ1ZMSQ&q=https%3A%2F%2Fwww.facebook.com%2FWeb-R%25C3%25A1dio-%25C3%2581gape-371168636230275%2F%3Fref%3Dpage_internal" className="text-gray-900 hover:text-red-600">
            <FontAwesomeIcon icon={faSquareFacebook} className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/comunidadecatolicaagape/?igshid=YmMyMTA2M2Y%3D" className="text-gray-900 hover:text-red-600">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@comunidadecatolicaagape7242" className="text-gray-900 hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
                Comunidade ÀGAPE
              </h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faX} className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 ">
            <div className="space-y-2">
              <Disclosure as="div" className="-mx-3 ">
                {({ open }) => (
                  <>

                    {/* <div className="flex flex-col items-center justify-center">
                      <Disclosure.Button className="w-full flex items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-00 text-black hover:bg-yellow-500">
                        <span className="flex-grow">SOBRE NÓS</span>
                        <FaChevronDown className={classNames(open ? 'transform rotate-180' : '', 'h-5 w-5 text-black-')} aria-hidden="true" />
                      </Disclosure.Button>

                    </div> */}




                    <Disclosure.Panel className="mt-2 space-y-2">
                      {products.map((item, index) => (
                        <div key={index}>
                          <Link to={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center">
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Link to="/history" className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">História</Link>
              <Link to="/fundador" className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Fundadores</Link>
              <Link to="/news" className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Notícias</Link>
              <Link to="/formacao" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Formação</Link>
              <Link to="/eventos" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Eventos</Link>
              <Link to="/liturgia-diaria" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Liturgia Diária</Link>
              <Link to="/contato" className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2">Contato</Link>
              <Link to="/doacao" className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-green-500 hover:bg-yellow-500 text-center">Ajude-nos a evangelizar</Link>

            </div>
          </div>

          <div className="relative text-gray-600 flex items-center mr-4 py-8">
            <input type="search" name="search" placeholder="Buscar..." className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300 flex-grow" />
            <button type="submit" className="absolute right-0 top-0 mt-10 mr-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Dialog.Panel>

      </Dialog>



    </header>
  )
}
