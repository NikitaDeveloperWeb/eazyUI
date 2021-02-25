import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Slider from '../../../EazyUI/Slider';
import One from '../img/avatar.jpg';
import two from '../img/maxresdefault.jpg';
import three from '../img/shinobu.jpg';
const SlidersArray = [
  <ComponentDataGrid
    component={<Slider photos={[One, two, three]} />}
    API="<Slider/>"
    name="Slider"
    props={[
      {
        prop: 'photos',
        description: '- фотографии для слайдера.',
      },
    ]}
  />,
];

function Sliders() {
  return (
    <div>
      {SlidersArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Sliders;
