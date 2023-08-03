import React from 'react';
import dynamic from 'next/dynamic';
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder/ImageWithPlaceholder";

const VideoComponent = dynamic(() => import('./Video'), { ssr: false });


const ImageSlider = ({slides, activeSlide=0}) => {

    return (
        <div className="image-slider right-left fade-in reverse-delay-2">
            {slides.map((slide, index) => (
                <div key={index} className="fade-in scale-down">
                    {slide.image ? (
                        <ImageWithPlaceholder
                            className={"slide" + (index === activeSlide ? " _active" : "")}
                            src={slide.image}
                            srcLow={slide.imageLow}
                            on
                            fill={true}
                            alt="Anomaly image"
                        />
                    ) : (
                        <VideoComponent className={"slide " + (index === activeSlide ? " _active" : "")} videoSrc={slide.video} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;