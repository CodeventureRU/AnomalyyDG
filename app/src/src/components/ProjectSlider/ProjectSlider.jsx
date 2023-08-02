import React from 'react';
import TextSlider from "@/components/TextSlider/TextSlider";

const ProjectSlider = ({slides, activeSlide, setActiveSlide, transition}) => {
    return (
        <div className="projects">
            <div className="row">
                <div className="projects-fade fade-in left-right col-md-4 reverse-delay-2">
                    <TextSlider className="fade-in delay-1 reverse-delay-1" onSlideChanged={setActiveSlide}>
                        {slides.map((slide, index) => (
                            <div className="project" key={index}>
                                <h1 onClick={() => transition({href: slide.href})}>{ slide.title }</h1>
                            </div>
                        ))}
                    </TextSlider>

                    <div className="project-subtitle fade-in delay-2">
                        {slides.map((slide, index) => (
                            <h4 key={index} className={index === activeSlide ? `_active` : ''}>{slide.description}</h4>
                        ))}

                    </div>
                </div>
            </div>


        </div>

    );
};

export default ProjectSlider;