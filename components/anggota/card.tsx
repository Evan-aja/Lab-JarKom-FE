import React from 'react';

interface CardProps {
    member: {
        id: number;
        name: string;
        position: string;
        department: string;
        studyProgram: string;
        email: string;
        isStudent: boolean;
        image: string;
    };
}

const Card: React.FC<CardProps> = ({ member }) => {
    return (
        <div className="md:flex  px-8 xl:px-28 py-8 w-full my-8 border border-gray-500">
            <div className="flex md:w-1/6 items-center justify-center">
                <div className="aspect-[1/1] w-24 mb-4 md:mb-0 md:w-32 lg:w-48">
                    <img src={member.image} alt={member.name} className={"object-cover rounded-full w-full h-full"}/>
                </div>
            </div>

            <div className={"border-r border-gray-300 hidden md:mx-8 md:block"}></div>

            <div className="md:w-5/6 font-poppins">
                <h2 className="mb-4 font-semibold text-xl truncate lg:text-3xl">{member.name}</h2>
                <p className="text-sm lg:text-xl break-words mb-2">{member.position}</p>
                <p className="text-sm lg:text-xl break-words mb-2">{member.department}</p>
                <p className="text-sm lg:text-xl break-words">{member.studyProgram}</p>
                <p className="mt-4 text-xs md:text-sm lg:text-md break-words">{member.email}</p>
            </div>
        </div>
    );
};

export default Card;