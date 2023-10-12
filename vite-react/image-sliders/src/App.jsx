import ImageSlider from './components/image-slider';

import image1 from './assets/pumpkin-patch-2023-1.jpg';
import image2 from './assets/pumpkin-patch-2023-2.jpg';
import image3 from './assets/pumpkin-patch-2023-3.jpg';
import image4 from './assets/pumpkin-patch-2023-4.jpg';
import image5 from './assets/pumpkin-patch-2023-5.jpg';
import image6 from './assets/pumpkin-patch-2023-6.jpg';
import image7 from './assets/pumpkin-patch-2023-7.jpg';
import image8 from './assets/pumpkin-patch-2023-8.jpg';

const IMAGES = [image1, image2, image3, image4, image5, image6, image7, image8];

const App = () => (
  <div style={{ maxWidth: "500px", width: '100%', aspectRatio: '1', margin: "0 auto" }}>
    <ImageSlider imageUrls={IMAGES} />
  </div>
);

export default App