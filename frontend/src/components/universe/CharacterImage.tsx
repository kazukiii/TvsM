import { FC, useState } from "react";
import PropTypes from "prop-types";

interface CharacterImageProps {
  imageSources: string[]; // Pass an array of image sources
}

const CharacterImage: FC<CharacterImageProps> = ({ imageSources }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  return (
    <div className="image">
      <div className="archer-BW-wrapper">
        <img
          className="archer-BW"
          alt="Archer BW"
          src={imageSources[currentImageIndex]}
        />
      </div>
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
};

CharacterImage.propTypes = {
  imageSources: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CharacterImage;
