import { useState } from 'react'
import { Dialog} from '@headlessui/react'
import { Link } from 'react-router-dom'
import { faBars, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const adminLinks = [
  { name: 'Dashboard', href: "/admin/dashboard" },
  { name: 'Usuários', href: '/admin/usuarios' },
  { name: 'Administradores', href: '/admin/administradores' },
  { name: 'Configurações', href: '/admin/configuracoes' },
]

export default function AdminSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <header className="bg-gradient-r shadow-md">
      <nav className="bg-gray-100 mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto lg:hidden" src='https://github.com/AdsonVicente/ImagensUrlDados/blob/main/logo.png?raw=true' alt="Logo" />
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
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
          <div className="relative text-gray-600">
            <input type="search" name="search" placeholder="Buscar..." className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
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
          <div className="mt-6">
            <div className="space-y-2">
              {adminLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-yellow-500 text-center mb-2"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
