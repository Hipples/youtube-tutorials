import ImageSlider from './components/image-slider';
import { IMAGES } from './components/images'; 

const App = () => (
  <div style={{ maxWidth: "500px", width: '100%', aspectRatio: '1', margin: "0 auto" }}>
    <ImageSlider images={IMAGES} />
  </div>
);

export default App