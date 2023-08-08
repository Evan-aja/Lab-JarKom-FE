import React, { useEffect, useRef, useState } from "react";

type SliderProps = {
    images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    const handlePrevious = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 3 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 3 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in"
                    style={{
                        width: `${images.length * 100}%`,
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                    ref={sliderRef}
                >
                    {images.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="w-1/3 p-1 h-52"
                        >
                            <img
                                src={imageUrl}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-3 left-3">
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full"
                    onClick={handlePrevious}
                >
                    Prev
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
