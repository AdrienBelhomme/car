import ReactSlider from 'react-slider';

const Slider = () => (

  <ReactSlider
    value={10}
    onChange={() => {}}
    min={0}
    max={100}
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
  />
);

export default Slider;
