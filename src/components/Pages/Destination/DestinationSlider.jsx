import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import data from '../../../data/data.json'
import { useEffect, useRef } from 'react';
import './destination.css'



export const DestinationSlider = () => {
  let destinations = data.destinations
  let listSlider = useRef();
  useEffect(() => {
    let bullets = listSlider.current.querySelectorAll(".slider-bullets-item");
    bullets.forEach((bullet, index) => {
      bullet.innerText = destinations[index].name;
    });
  },);
  return (
      <Slider  slideClass={'my-slider'}
  infinite={true}
  bullets={true}
  arrowsNav={false}
  animation={'scale'}
  >
  <div className='slider my-slider' ref={listSlider}>
      <ul className='slider-wrapper destination'>
        {destinations.map((item) => (
          <li className='slider-element' key={item.name}>
            <div>
            <img className='destination-img' src={`${item.images.png}`} alt={item.name} />
            </div>
            <div className='destination-info'>
            <h2 className='destination-info__title'>{item.name}</h2>
            <p className='destination-info__paragraph'>{item.description}</p>
            <hr className='destination-info__line'/>
            <div className="destination-data">
                <div>
                    <p className='destination-data__title'>Avg. Distance</p>
                    <p className='destination-data__data'>{item.distance}</p>
                </div>
                <div>
                    <p className='destination-data__title'>Est. Travel Time</p>
                    <p className='destination-data__data'>{item.travel}</p>
                </div>
            </div>
            </div>
          </li>
        )
        )
        }
      </ul>
      
    </div>
 


</Slider>
      
  )
}