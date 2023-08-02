import React, {useEffect, useState} from 'react';
import TextSliderItem from "@/components/TextSlider/TextSliderItem";

const TextSlider = ({children, onSlideChanged, ...props}) => {
    const slidesCount = React.Children.count(children);
    const [activeSlide, setActiveSlide] = useState(0);
    const [lastAnimation, setLastAnimation] = useState(new Date());

    const setNewActiveSlide = (newActiveSlide) => {
        let now = new Date();
        let delta = now.getTime() - lastAnimation.getTime();
        if (delta > 500) {
            setActiveSlide(newActiveSlide);
            onSlideChanged(newActiveSlide);
            setLastAnimation(new Date());
        }

    }
    const nextSlide = () => {
        setNewActiveSlide((activeSlide + 1) % slidesCount);
    }

    const prevSlide = () => {
        setNewActiveSlide((activeSlide + slidesCount - 1) % slidesCount);
    }

    const onMouseWheel = e => {
        if (e.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }

    useEffect(() => {

        document.body.addEventListener('mousewheel', onMouseWheel);

        return () => {
            document.body.removeEventListener('mousewheel', onMouseWheel);
        };
    }, [activeSlide]);

    return (
        <div className={`text-slider ${props.className}`}>
            <div className="text-slider-wrapper">
                {React.Children.map(children, (child, index) => (
                    <TextSliderItem state={
                        index === activeSlide ? `_active` : (
                            index === (activeSlide + slidesCount - 1) % slidesCount ? `_prev` : (
                                index === (activeSlide + slidesCount - 2) % slidesCount ? `_first` : (
                                    index === (activeSlide + 1) % slidesCount ? `_next` : (
                                        index === (activeSlide + 2) % slidesCount ? `_last` : ''
                                    )
                                )
                            )
                        )
                    }
                    number={index}
                    onClick={e => {
                        if (index !== activeSlide) {
                            e.stopPropagation();
                            e.preventDefault();
                            setNewActiveSlide(index);
                        }
                    }}
                    >{child}</TextSliderItem>
                ))}
            </div>

        </div>
    );
};

export default TextSlider;