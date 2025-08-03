import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
  pauseOnHover: false,
};

const HeroSlider = ({ heroImages }: { heroImages: string[] }) => (
  <Slider {...sliderSettings} className="hero-slider">
    {heroImages.map((src, index) => (
      <Box
        key={index}
        component="div"
        sx={{
          height: { xs: '90vh', md: '100vh' },
          width: '100vw',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          position: 'relative',
        }}
      />
    ))}
  </Slider>
);

export default HeroSlider;
