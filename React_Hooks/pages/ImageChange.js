import React from "react";
import ImageHoverScrollEffect from "../src/ImageHoverScrollEffect";

const ImageChange = () => {
  return (
    <div>
      <ImageHoverScrollEffect
        primaryImg={"/static/image1.png"}
        secondaryImg={"static/image2.png"}
        alt={"image_1"}
      />
      &nbsp; &nbsp; &nbsp;
      <ImageHoverScrollEffect
        primaryImg={"static/image2.png"}
        secondaryImg={"/static/image1.png"}
        alt={"image_1"}
      />
         <ImageHoverScrollEffect
        primaryImg={"/static/image1.png"}
        secondaryImg={"static/image2.png"}
        alt={"image_1"}
      />
           <ImageHoverScrollEffect
        primaryImg={"static/image2.png"}
        secondaryImg={"/static/image1.png"}
        alt={"image_1"}
      />
    </div>
  );
};

export default ImageChange;
