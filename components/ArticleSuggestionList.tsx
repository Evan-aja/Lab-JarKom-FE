
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

interface Article {
    id: number;
    title: string;
    image: string;
    category: string;
}

const dummyData: Article[] = [
    {
        id: 1,
        title: 'Dummy Article 1 nnnnnn gggyuyftu ghgjfttd abcd abcd abcd',
        image: 'https://dummyimage.com/200x400',
        category: 'Category 1',
    },
    {
        id: 2,
        title: 'Dummy Article 2',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },
    {
        id: 3,
        title: 'Dummy Article 3',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },
    {
        id: 4,
        title: 'Dummy Article 4',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },
    {
        id: 5,
        title: 'Dummy Article 5',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },
    {
        id: 6,
        title: 'Dummy Article 6',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },
    {
        id: 7,
        title: 'Dummy Article 7',
        image: 'https://dummyimage.com/200x200',
        category: 'Category 1',
    },

];

const ArticleSuggestionList: React.FC = () => {
    const filteredRecentArticles = dummyData.slice(0, 5); // Display only the first 5 articles

    const shuffledRandomArticles = dummyData
        .sort(() => Math.random() - 0.5) // Shuffle the articles randomly
        .slice(0, 5); // Display only the first 5 articles

    return (
        <div className="w-full justify-between">
            <div>
                <h3 className={'text-2xl text-gray-500'}>Artikel</h3>
                <h2 className={'text-3xl text-black font-semibold mb-2'}>Nama Kategori</h2>
                <h3 className={'text-lg text-gray-500 text-right'}>Lainnya</h3>
                <ul>
                    {shuffledRandomArticles.map((article) => (
                        <li key={article.id} className="mb-4">
                            <Link href={`/articles/${article.id}`}>
                                <div className="flex items-center">
                                    <div className="flex aspect-[1/1] w-12 h-12 mr-2">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className=" object-cover w-full "
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-medium"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500">{article.category}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Recent Articles</h2>
                <ul>
                    {filteredRecentArticles.map((article) => (
                        <li key={article.id} className="mb-4">
                            <Link href={`/articles/${article.id}`}>
                                <div className="flex items-center">
                                    <div className="flex aspect-[1/1] w-12 h-12 mr-2">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className=" object-cover w-full "
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-medium"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500">{article.category}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArticleSuggestionList;
