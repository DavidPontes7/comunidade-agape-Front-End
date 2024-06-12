
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState<any>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const faqs: { question: string; answer: string }[] = [
        {
            question: "Onde está localizada a Comunidade Católica Àgape?",
            answer: "A comunidade Católica Àgape está localizada na cidade de Tobias Barreto, Sergipe."
        },
        {
            question: "Qual é o principal evento realizado pela nossa comunidade católica?",
            answer: "O principal evento anual de nossa comunidade católica é o nosso acampamento espiritual, um momento de profunda conexão, aprendizado e diversão para todas as idades. Durante o acampamento, oferecemos uma variedade de atividades que incluem momentos de oração, reflexão, dinâmicas em grupo e momentos de convivência fraternal. É uma oportunidade única para fortalecer nossa fé, criar laços e renovar nosso compromisso com os valores do evangelho. O acampamento é aberto a todos os membros da comunidade e suas famílias, e buscamos torná-lo um momento de enriquecimento espiritual e alegria para todos os participantes."
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className=" min-h-screen">
            <section className="relative bg-gradient-to-b from-blue-500 to-indigo-600 text-white h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-wide">Entre em Contato</h1>
                    <p className="text-lg mt-4">Estamos aqui para ouvir você</p>
                </div>
            </section>

            <section className="container mx-auto py-8 px-4 md:px-8">
                <div className="flex flex-wrap justify-between">
                    <form onSubmit={handleSubmit} className="max-w-md w-full mb-8">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-32" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
                    </form>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="flex items-center justify-between w-full bg-gray-100 rounded-md py-2 px-4 text-left focus:outline-none"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <span>{expandedIndex === index ? '-' : '+'}</span>
                                </button>
                                {expandedIndex === index && (
                                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


            </section>
            <section className="py-12 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Visite-nos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Nossa Localização
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.954186996642!2d-38.006544153571376!3d-11.188482908142564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x711b299756ed9d1%3A0xa5eaad84906cd6e1!2sLivraria%20Kair%C3%B3s!5e0!3m2!1spt-BR!2sbr!4v1717409274064!5m2!1spt-BR!2sbr" width="100%"
                                height="100%"
                                frameBorder="0"
                                
                                aria-hidden="false"
                                
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-lg leading-6 font-medium text-gray-900"> Largo Glicério Siqueira, 248 - Tobias Barreto, SE, 49300-000</p>
                            <p className="mt-1 text-lg leading-6 text-gray-500">@comunidadecatolicaagape</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ContactPage;
