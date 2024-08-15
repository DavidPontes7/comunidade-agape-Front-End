import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const adminLinks = [
  { name: 'Administrador', href: '/Dashboard' },
  { name: 'Conteúdo', href: '/GerenciarConteudo' },
  { name: 'Liturgia', href: '/gerenciarLiturgia' },
  { name: 'Evento', href: '/publicarEvento' },
];

export default function AdminNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-amber-500 p-6 shadow-lg transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white uppercase">Administração</h1>
          <button
            type="button"
            className="lg:hidden text-gray-200"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button> 
        </div>
        <nav>
          {adminLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-lg font-medium text-gray-100 hover:bg-amber-600 rounded transition-colors"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-1 ml-64 lg:ml-0 md:hidden ">
        <header className="shadow-md bg-amber-500 p-1">
          <nav className="container mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="p-2 inline-flex items-center justify-center text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {adminLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium leading-6 text-gray-100 hover:text-gray-200 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition-transform duration-200 ease-out"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform duration-200 ease-in"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg lg:hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h1 className="text-lg font-bold text-gray-800 uppercase">Administração</h1>
                  <button
                    type="button"
                    className="text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                  </button>
                </div>
                <div className="py-4">
                  {adminLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-6 py-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
