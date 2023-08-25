import { FC } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes to define prop types

import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';
import discordIcon from '../../assets/icons/discord.svg';
import Button from '../common/Button';

interface HeaderProps {
  buttonText?: string; // Make the button text optional
  mainText?: string; // Make the main text optional
  showIcons?: boolean; // Make the icons optional
}

const Header: FC<HeaderProps> = ({ buttonText = '', mainText = 'CHOOSE YOUR SIDE!', showIcons = true }) => {
  return (
    <div className="h-60 text-center">
      {showIcons && ( // Render icons only if showIcons prop is true
        <div className="flex justify-end items-center p-6 gap-6">
          {showIcons && <img src={instagramIcon} alt="instagram" className="w-6 h-6" />}
          {showIcons && <img src={twitterIcon} alt="twitter" className="w-6 h-6" />}
          {showIcons && <img src={facebookIcon} alt="facebook" className="w-6 h-6" />}
          {showIcons && <img src={tiktokIcon} alt="tiktok" className="w-6 h-6" />}
          {showIcons && <img src={discordIcon} alt="discord" className="w-6 h-6" />}
        </div>
      )}
      {mainText && <h1 className="font-ldr-kaet text-6xl">{mainText}</h1>}
      {buttonText && <Button text={buttonText}></Button>}
    </div>
  );
};

Header.propTypes = {
  buttonText: PropTypes.string,
  mainText: PropTypes.string,
  showIcons: PropTypes.bool,
};

export default Header;
