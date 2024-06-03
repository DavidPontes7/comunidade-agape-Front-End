import React from 'react';

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:
  
        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Em construção</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página em construção</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, esta página ainda está em construção. Volte em breve para conferir o conteúdo!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para a página inicial
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contacte o suporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
