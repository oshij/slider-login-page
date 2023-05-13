import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTd5kLjls9fhm5Xk_t_uWtsnHxQbWvGlYcS7ZAHkwQC6-QMBYGFQMCGgckRvEGVjSyzE&usqp=CAU',
      alt: 'Slide 1',
      caption: 'Slide 1 Caption',
    },
    {
      id: 2,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM-HkerAbStAelD44jB3DWjPKdbs_F79wHewoOrSlqbz-S5R2rqRlcGiezhW8RzDWXFg&usqp=CAU',
      alt: 'Slide 2',
      caption: 'Slide 2 Caption',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'Slide 3',
      caption: 'Slide 3 Caption',
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={index === currentIndex ? 'slider-image active' : 'slider-image'}
        />
      ))}
      <div className="slider-caption">{images[currentIndex].caption}</div>
    </div>
  );
};

export default Slider;
