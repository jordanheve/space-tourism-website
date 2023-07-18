
import 'slider-moon/dist/style.css'

import { DestinationSlider } from './DestinationSlider';




export const Destination = () => {

  return (
    <section className='section-wrapper'>
    <h3 className='title'><span className='title-number'>01 </span>Pick your destination</h3>
    <DestinationSlider className="Destination-slider"/>
    </section>
      
  )
}
