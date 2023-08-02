import { useEffect, useRef } from 'react';

const VideoComponent = ({ videoSrc, className }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // Установка необходимых свойств и обработчиков событий для видео
        videoElement.src = videoSrc;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.controls = false;

        return () => {
            // Очистка видео при размонтировании компонента
            videoElement.src = '';
            videoElement.load();
        };
    }, [videoSrc]);

    return (
        <video ref={videoRef} className={className} />
    );
};

export default VideoComponent;