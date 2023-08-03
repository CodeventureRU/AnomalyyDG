import React, {useState} from 'react';
import Image from "next/image";

const imageLoader = ({ src }) => {
    return `${src}`
}

const ImageWithPlaceholder = ({
    src,
    srcLow,
    ...imageProps
}) => {
    const [loading, setLoading] = useState(true);
    const [showFull, setShowFull] = useState(false);


    return (
        <>
            {
                loading ? (
                    <Image
                        src={srcLow}
                        loader={imageLoader}
                        {...imageProps}
                    />
                ) : ""
            }
            <Image
                src={src}
                style={{visibility: !showFull ? "hidden" : "visible"}}
                loader={imageLoader}
                onLoad={() => {
                    setShowFull(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 100);
                }}
                {...imageProps}
            />
        </>
    );
};

export default ImageWithPlaceholder;