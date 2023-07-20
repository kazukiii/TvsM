import { FC, useState } from "react";
import PropTypes from "prop-types";

interface ImageProps {
  imageLocation?: string;
}

const Image: FC<ImageProps> = ({ imageLocation = "" }) => {
  const [imageSrc, setImageSrc] = useState(imageLocation || "archer-BW-1.png");

  const changeImage = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "archer-BW-1.png" ? "panda-BW-1.png" : "archer-BW-1.png"
    );
  };

  return (
    <div className="image">
      <div className="archer-BW-wrapper">
        <img className="archer-BW" alt="Archer BW" src={imageSrc} />
      </div>
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
};

Image.propTypes = {
  imageLocation: PropTypes.string,
};

export default Image;
