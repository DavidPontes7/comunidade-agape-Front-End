import React from 'react';

import founder from '../../../img/fundador2.jpg';

const Fundador = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
          Nosso Fundador
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 md:mr-4">
          <img src={founder} alt="Nosso Fundador" className="rounded-lg shadow-xl mb-4 md:mb-0 md:w-full" />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <p className="text-lg text-gray-700 mb-4">
           aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa
          </p>
          <p className="text-lg text-gray-700">
           aaaaaadesaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Fundador;
