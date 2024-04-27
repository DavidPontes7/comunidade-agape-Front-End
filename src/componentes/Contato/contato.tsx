import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
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
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
        console.log('Dados do formulário:', formData);
        // Limpar o formulário após o envio
        setFormData({ name: '', email: '', message: '' });
    };

    // Perguntas frequentes
    const faqs = [
        {
            question: "Onde está localizada a Comunidade Católica Àgape?",
            answer: "A comunidade Católica Àgape está localizada na cidade de Tobias Barreto,Sergipe." 
        },
        {
            question: "Qual é o principal evento realizado pela nossa comunidade católica?",
            answer: "O principal evento anual de nossa comunidade católica é o nosso acampamento espiritual, um momento de profunda conexão, aprendizado e diversão para todas as idades. Durante o acampamento, oferecemos uma variedade de atividades que incluem momentos de oração, reflexão,  dinâmicas em grupo e momentos de convivência fraternal. É uma oportunidade única para fortalecer nossa fé, criar laços e renovar nosso compromisso com os valores do evangelho. O acampamento é aberto a todos os membros da comunidade e suas famílias, e buscamos torná-lo um momento de enriquecimento espiritual e alegria para todos os participantes."
        },
        {
            question: ";;;;",
            answer: ";;;;"
        },
        
    ];

    // Estado para controlar o estado de cada pergunta
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Função para alternar o estado da pergunta clicada
    const toggleQuestion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Entre em Contato</h1>
            <div className="flex flex-wrap">
                {/* Formulário de Contato */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
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

                {/* Perguntas Frequentes */}
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
        </div>
    );
}

export default ContactPage;
