import React, { useRef, useEffect, useState } from "react";

const ImageHoverScrollEffect = (prop) => {
  const imgRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const [inview, setInview] = useState(false);

  const isInview = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  };

  const scrollHandler = () => {
    setInview(() => {
      return isInview();
    });
  };

  return (
    <img
      src={inview ? prop.secondaryImg : prop.primaryImg}
      alt={prop.alt}
      width='500'
      ref={imgRef}
    />
  );
};

export default ImageHoverScrollEffect;
