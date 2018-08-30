import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import well from './img/slides/africa-landscape.jpeg';
import './HomePageSlider.css';

class HomePageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: this.getPadding(),
      slides: [{
        title: 'Test Title',
        subtitle: 'This is test of the short description',
        imageUrl: well,
        url: '/About',
      },
      {
        title: 'Test Title',
        subtitle: 'This is test of the short description',
        imageUrl: well,
        url: '/About',
      },
      {
        title: 'Test Title',
        subtitle: 'This is test of the short description',
        imageUrl: well,
        url: '/About',
      },
      ],
    };
  }

  getPadding = () => {
    if ($(window).width() > 700) {
      return (($(window).width() - 700) / 2);
    }
    return 0;
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding(),
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const settings = {
      centerMode: true,
      centerPadding: `${this.state.padding}px`,
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true,
    };

    const slides = this.state.slides.map((slide, index) => (
       <div key={index}>
         <HomePageSlide {...slide}/>
       </div>
    ));

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
