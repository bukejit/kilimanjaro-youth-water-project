import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomePageSlide.css';

const HomePageSlide = ({
  title, imageUrl, subtitle, url, buttonText = 'LEARN MORE',
}) => {
  const slideStyle = {
    background: `url(${imageUrl}) no-repeat`,
  };

  const buttonWrapperStyle = {
    textAlign: 'center',
  };

  let lowerSection;
  if (url) {
    lowerSection = (
      <div style ={buttonWrapperStyle}>
        <Link to={url} role="button" className="btn btn-outline-primary image-slide-button center-block">
          {buttonText}
        </Link>
      </div>
    );
  }

  return (
    <div className="image-slide" style={slideStyle}>
      <div className="row image-slide-fullheight-row">
        <div className="col align-self-center image-slide-content">
          <p className="image-slide-title">{title}</p>
          <hr/>
          <p className="image-slide-sub-title">{subtitle}</p>
          {lowerSection}
        </div>
      </div>
    </div>
  );
};

export default HomePageSlide;

HomePageSlide.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  subtitle: PropTypes.string,
  url: PropTypes.string,
  buttonText: PropTypes.string,
};
