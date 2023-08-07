import React from "react";
import Link from "next/link";

type CardProps = {
    id: number;
    title: string;
    image: string;
    content: string;
    link: string;
};

const Card: React.FC<CardProps> = ({ id, title, image, content, link }) => {
    return (
        <div className="w-full rounded-[30px] overflow-hidden shadow-lg sm:text-sm md:text-base lg:text-lg xl:text-xl font-poppins">
            <div className="">
                <img
                    className="object-cover w-full max-h-72"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="px-6 my-4">
                <div className="font-semibold text-lg text-black mb-2">{title}</div>
                <p className="text-gray-700 text-gray text-sm line-clamp-2" style={{display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{content}</p>
            </div>
            <div className="px-6 mb-4 flex self-right">
                <a
                    href={link}
                    className="bg-ghost text-sm text-base py-2 rounded"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Card;