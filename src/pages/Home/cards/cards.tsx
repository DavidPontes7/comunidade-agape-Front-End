import React from 'react';

function Card({ image, title, author, date, description, link }:any) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform ">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-2">Por {author} | {date}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href={link} className="text-blue-500 mt-2 inline-block">Leia Mais</a>
            </div>
        </div>
    );
}

export default Card;
