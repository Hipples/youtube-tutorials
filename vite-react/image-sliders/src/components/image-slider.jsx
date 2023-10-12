import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';

import './image-slider.css';

const ImageSlider = ({ imageUrls }) => { 
  const [image, setImage] = useState(0);

  const ShowPrevImage = () => {
    setImage(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });  
  }

  const ShowNextImage = () => {
    setImage(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
        {imageUrls.map(url => (
          <img 
            key={url} src={url} 
            className="img-slider-img"
            style={{ translate: `${-100 * image}%` }} />
        ))}
      </div>
      <button 
        onClick={ShowPrevImage} 
        className='img-slider-btn' 
        style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button 
        onClick={ShowNextImage}
        className='img-slider-btn' 
        style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
      <div style={{ 
        position: 'absolute', 
        bottom: '.5rem', 
        left: '50%', 
        translate: '-50%',
        display: 'flex',
        gap: '.25rem' }}>
          {imageUrls.map((_, index) => (
            <button 
              onClick={() => setImage(index)}
              className='img-slider-dot-btn'>
                {index === image ? <CircleDot /> : <Circle />}
            </button>
          ))}
      </div>
    </div>
  );
}

export default ImageSlider;
