import { Fragment, useState, useEffect } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavbarItens = [
  { name: 'História', href: '/historia' },
  { name: 'Fundadores', href: '/fundadores' },
  { name: 'Contato', href: '/contato' },

];

const NavbarMobile = [
  { name: 'História', href: '/historia' },
  { name: 'Fundadores', href: '/fundadores' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Formação', href: '/formacao' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Liturgia Diaria', href: '/liturgia-diaria' },

];
export default function AdminNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('fixed', 'top-0', 'w-full', 'z-50');
      } else {
        header.classList.remove('fixed', 'top-0', 'w-full', 'z-50');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="shadow-md bg-amber-500 p-1">
      <nav className="mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            {/* <img src="https://github.com/AdsonVicente/ImagensUrlDados/blob/main/logo.png?raw=true" className="w-90 h-10 mr-2 object-contain" alt="Comunidade Àgape" /> */}
            <h1 className="hidden  md:block text-lg lg:text-xl font-bold  text-white  uppercase tracking-wide">
              Comunidade Católica Àgape
            </h1>
            <h1 className="md:hidden ml-6 text-lg lg:text-xl font-bold  text-white  uppercase tracking-wide">
              Comunidade Àgape
            </h1>

          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 inline-flex items-center justify-center  text-white "
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="uppercase flex items-center text-xl font-bold text-gray-900 hover:text-yellow-500 transition-colors duration-200">
                  Sobre nós
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-4 h-4" />
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
                  <Popover.Panel className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 p-5">
                      {NavbarItens.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150" style={{ fontFamily: 'Arial' }}
                        >
                          <p className="text-lg font-medium text-gray-900">{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Link to="/Noticias" className="text-xl font-bold text-white uppercase " >
            Notícia
          </Link>
          <Link to="/Formacao" className="text-xl font-bold text-white uppercase " >
            Formação
          </Link>
          <Link to="/Eventos" className="text-xl font-bold text-white uppercase ">
            Eventos
          </Link>
          <Link to="/Liturgia-diaria" className="text-xl font-bold text-white uppercase ">
            Liturgia Diária
          </Link>
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
            <div className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-lg">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <img src="https://github.com/AdsonVicente/ImagensUrlDados/blob/main/logo.png?raw=true" className="w-20" alt="Comunidade Àgape" />
                <button
                  type="button"
                  className="text-gray-700 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                {NavbarMobile.map((item, index) => (
                  <Link

                    key={index}
                    to={item.href}
                    className="block px-6 py-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100" style={{ fontFamily: 'Arial' }}
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
    </header>
  );
}
