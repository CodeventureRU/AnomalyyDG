import React, {useEffect, useRef, useState} from 'react';

const FadeInOnScroll = ({children, defaultActive=false, ...props}) => {
    const elementRef = useRef();
    const [active, setActive] = useState(defaultActive);

    useEffect(() => {
        const handleScroll = () => {

            const elementRect = elementRef.current.getBoundingClientRect();
            const pageHeight = document.documentElement.clientHeight;
            const threshold = elementRect.height / 4;

            if (elementRect.top < pageHeight - threshold && elementRect.bottom > threshold) {
                setActive(true);
            } else {

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={elementRef} className={`fade-in-on-scroll ${active ? "_active" : ""}`}>
            {children}
        </div>
    );
};

export default FadeInOnScroll;