import React, { createContext, useState, ReactNode, useContext } from 'react';
import { fakeNews as initialNews } from '../data/Noticia-Item/NoticiaData';

interface News {
    id: number;
    title: string;
    image: string;
    author: string;
    date: string;
    text: string;
}

interface NewsContextProps {
    news: News[];
    addNews: (newsItem: News) => void;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [news, setNews] = useState<News[]>(initialNews);

    const addNews = (newsItem: News) => {
        setNews([newsItem, ...news]);
    };

    return (
        <NewsContext.Provider value={{ news, addNews }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error('useNews must be used within a NewsProvider');
    }
    return context;
};
