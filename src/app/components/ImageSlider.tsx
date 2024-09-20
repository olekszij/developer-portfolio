import { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[] | null | undefined;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    if (!images || images.length === 0) {
        throw new Error('ImageSlider component expects an array of images');
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="relative w-full h-[80%] flex items-center justify-center">
            <button
                className="absolute left-0 bg-gray-300 p-2 rounded-full"
                onClick={prevSlide}
            >
                &#9664;
            </button>
            <div className="w-full h-full relative">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        fill // Заменяем layout="fill" на fill
                        style={{ objectFit: "cover" }} // Используем правильный стиль
                        className="rounded-lg"
                    />
                ))}
            </div>
            <button
                className="absolute right-0 bg-gray-300 p-2 rounded-full"
                onClick={nextSlide}
            >
                &#9654;
            </button>
        </div>
    );
};

export default ImageSlider;

