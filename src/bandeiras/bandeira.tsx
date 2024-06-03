import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function SummerCampBanner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <>
      {isBannerOpen && (
         <div className="fixed top-0 w-full z-50 bg-yellow-400 text-gray-900 px-6 py-3 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">Acampamento Jovem em Julho</strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Venha participar do nosso acampamento jovem em julho! Prepare-se para uma experiência incrível de comunhão, aprendizado e diversão.
            </p>
            <a
              href="#"
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Registre-se agora <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleCloseBanner}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}


