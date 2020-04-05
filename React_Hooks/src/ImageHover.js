import React, { useRef } from "react";

const ImageHover = (prop) => {
  const imgRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        (imgRef.current.src = prop.secondaryImg), console.log(imgRef);
      }}
      onMouseOut={() => {
        imgRef.current.src = prop.primaryImg;
      }}
      src={prop.primaryImg}
      alt={prop.alt}
      width='400'
      ref={imgRef}
    />
  );
};

export default ImageHover;
