// @client
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ images }: { images: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="relative overflow-hidden flex justify-center w-full h-80 rounded">
            <div
                className="flex mx-auto items-center transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {images.map((image: any, index: any) => (
                    <div key={index} className="w-full flex-shrink-0 mx-auto">
                        <Image className="p-16" src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Carousel;
