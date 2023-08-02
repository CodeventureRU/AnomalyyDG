import React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';

const VideoComponent = dynamic(() => import('./Video'), { ssr: false });


const ImageSlider = ({slides, activeSlide=0}) => {

    return (
        <div className="image-slider right-left fade-in reverse-delay-2">
            {slides.map((slide, index) => (
                <div key={index} className="fade-in scale-down">
                    {slide.image ? (
                        <Image
                            className={"slide" + (index === activeSlide ? " _active" : "")}
                            src={slide.image}
                            fill={true}
                            alt="Anomaly image"
                        />
                    ) : (
                        <VideoComponent className={"slide scale-down" + (index === activeSlide ? " _active" : "")} videoSrc={slide.video} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;