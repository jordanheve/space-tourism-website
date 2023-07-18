import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import data from '../../../data/data.json'
import './crew.css'



export const CrewSlider = () => {
    let crew = data.crew


  return (
    <Slider  slideClass={'my-slider'}
  infinite={true}
  bullets={true}
  arrowsNav={false}
  animation={'scale'}
  >
  <div className='slider my-slider' >
      <ul className='slider-wrapper crew' >
        {crew.map((item) => (
          <li className='slider-element' key={item.name}>
            <div className='crew-img-container'>
            <img className='crew-img' src={`${item.images.png}`} alt={item.name}/>
            </div>
            <div className='crew-info'>
            <p className='crew-info__role'>{item.role}</p>
            <h2 className='crew-info__name'>{item.name}</h2>
             <p className='crew-info__bio paragraph'>{item.bio}</p>
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

