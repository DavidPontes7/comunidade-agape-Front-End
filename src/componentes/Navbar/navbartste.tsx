// import { Fragment, useState } from 'react'
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
// import { Link } from 'react-router-dom'
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
// import logo from '../../img/logo.png';
// import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const products = [
//   { name: 'Sobre Nós', description: 'Descubra a história por trás da nossa comunidade', href: "/History" },
//   { name: 'Fundador', description: 'Saiba mais sobre a pessoa que iniciou tudo', href: '/fundador' },
//   { name: 'Contato', description: 'Contribua conosco para espalhar a mensagem do Evangelho', href: '/contato' },
// ]

// const callsToAction: any = []

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white shadow-md">
//       {/* <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 hidden lg:flex justify-between items-center py-4">
//         <div className="container mx-auto px-4 lg:px-6 flex items-center">
//           <h1 className="text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-wide">
//             <Link to="/" className="text-white">
//               Comunidade Católica Ágape
//             </Link>
//           </h1>
//           <div className="flex items-center space-x-4 ml-auto">
//             <Link to="https://www.instagram.com/comunidadecatolicaagape/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300" aria-label="Instagram">
//               <FaInstagram className="w-6 h-6" />
//             </Link>
//             <Link to="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300" aria-label="Facebook">
//               <FaFacebook className="w-6 h-6" />
//             </Link>
//             <Link to="https://www.youtube.com/channel/UCs9-K-QajDGH7r-YjUmQoaA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300" aria-label="YouTube">
//               <FaYoutube className="w-6 h-6" />
//             </Link>
//             <Link to="/doacao" className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-full font-semibold transition duration-300 transform hover:scale-105">
//               Doar Agora
//             </Link>
//           </div>
//         </div>
//       </nav> */}

//       <nav className="bg-white border-b-2 border-gray-300 mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <Link to="/" className="-m-1.5 p-1.5">
//             <img className="h-12 w-auto lg:hidden" src={logo} alt="Logo" />
//           </Link>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
//           </button>
//         </div>
//         <Popover.Group className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <Popover.Button className="flex items-center gap-x-1 text-lg leading-6 text-gray-900 hover:text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
//               Comunidade
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fillRule="evenodd" d="M10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586z" clipRule="evenodd" />
//               </svg>
//               <span style={{ margin: '0 10px', color: 'black' }}>|</span>
//             </Popover.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-4">
//                   {products.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-yellow-50"
//                     >
//                       <div className="flex-auto">
//                         <Link to={item.href} className="block font-semibold text-gray-900">
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </Link>
//                         <p className="mt-1 text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>
//           <Link to="/news" className="text-xl font-medium leading-6 text-gray-900 hover:text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
//             Notícias
//           </Link>
//           <span className="text-xl font-medium leading-6 text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>|</span>
//           <Link to="/formacao" className="text-xl font-medium leading-6 text-gray-900 hover:text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
//             Formação
//           </Link>
//           <span className="text-xl font-medium leading-6 text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>|</span>
//           <Link to="/liturgia-diaria" className="text-xl font-medium leading-6 text-gray-900 hover:text-red-500" style={{ fontFamily: 'Arial, sans-serif' }}>
//             Liturgia Diária
//           </Link>
//         </Popover.Group>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900"></a>
//         </div>
//       </nav>

//       <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="-m-1.5 p-1.5">
//               <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
//                 Com. Católica Ágape
//               </h1>
//             </Link>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <FontAwesomeIcon icon={faX} className="w-6 h-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" style={{ fontFamily: 'Arial, sans-serif' }}>
//                         Comunidade
//                         <div className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true"></div>
//                       </Disclosure.Button>
//                       <Disclosure.Panel className="mt-2 space-y-2">
//                         {[...products, ...callsToAction].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <Link to="/news" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">
//                   Notícias
//                 </Link>
//                 <Link to="/formacao" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                   Formação
//                 </Link>
//                 <Link to="/liturgia-diaria" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                   Liturgia
//                 </Link>
//               </div>
//               <div className="py-6">
//                 <Link to="/doacao" className="bg-yellow-300 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                   Ajude-nos a evangelizar
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>

//     </header>
//   )
// }
