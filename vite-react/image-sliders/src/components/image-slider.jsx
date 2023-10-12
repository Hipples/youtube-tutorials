import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import './image-slider.css';

const ImageSlider = ({ imageUrls }) => { 
  const [index, setIndex] = useState(0);

  const ShowPrevImage = () => {
    setIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });  
  }

  const ShowNextImage = () => {
    setIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={imageUrls[index]} className="img-slider-img" />
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
    </div>
  );
}

export default ImageSlider;
