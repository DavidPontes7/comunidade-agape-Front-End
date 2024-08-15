// AdminModal.tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import CadastrarAdministrador from '../../Gerenciamento/CadastrarAdministrador/CadastrarAdministrador';

const AdminModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 transform transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-xl font-semibold leading-6 text-gray-900"
                            >
                                Cadastro de Administrador
                            </Dialog.Title>
                            <div className="mt-4">
                                <CadastrarAdministrador />
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={onClose}
                                >
                                    Fechar
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AdminModal;
