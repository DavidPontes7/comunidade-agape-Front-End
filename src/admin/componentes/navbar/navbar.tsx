import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const adminLinks = [
  { name: 'Administrador', href: '/Dashboard' },
  { name: 'Conteudo', href: '/GerenciarConteudo' },
  { name: 'Liturgia', href: '/gerenciarLiturgia' },
  { name: 'Evento', href: '/publicarEvento' },
  

  
];

export default function AdminNavbar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="shadow-md bg-white p-3">
      <nav className=" mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <Link to="/Dashboard" className="-m-1.5 p-1.5 flex items-center">
            <h1 className="ml-2 text-lg lg:text-xl font-bold text-gray-800 uppercase tracking-wide">Administração</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 inline-flex items-center justify-center text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {adminLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-lg font-medium leading-6 text-gray-900 hover:text-black transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
          <div className="relative text-gray-600">
            {/* <input
              type="search"
              name="search"
              placeholder="Buscar..."
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300"
            /> */}
            {/* <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <FontAwesomeIcon icon={faSearch} />
            </button> */}
          </div>
        </div>
      </nav>

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
            <div className="fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link to="/admin/dashboard" className="text-lg font-bold text-gray-800 uppercase">Administração</Link>
                <button
                  type="button"
                  className="text-gray-700 lg:hidden"
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
              <Link to=''>
              </Link>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
