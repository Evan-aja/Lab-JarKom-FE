import React from 'react';

interface PaginationProps {
    totalCards: number;
    cardsPerPage: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   totalCards,
                                                   cardsPerPage,
                                                   currentPage,
                                                   onPageChange,
                                               }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageNumbers.length) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <nav>
                <ul className="flex items-center">
                    <li>
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center ${
                                currentPage === 1 ? 'bg-gray-300 text-gray-600' : ''
                            }`}
                        >
                            &lt;
                        </button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            className={`border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mx-1 ${
                                number === currentPage ? 'bg-blue-500 text-white' : ''
                            }`}
                        >
                            <button
                                onClick={() => onPageChange(number)}
                                className="focus:outline-none"
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === pageNumbers.length}
                            className={`border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center ${
                                currentPage === pageNumbers.length ? 'bg-gray-300 text-gray-600' : ''
                            }`}
                        >
                            &gt;
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;