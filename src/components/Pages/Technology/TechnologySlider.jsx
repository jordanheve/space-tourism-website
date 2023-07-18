import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import data from '../../../data/data.json'
import './technology.css'

export const TechnologySlider = () => {
    let technology = data.technology

  return (
    <Slider  slideClass={'my-slider'}
  infinite={true}
  bullets={true}
  arrowsNav={false}
  animation={'scale'}
  >
  <div className='slider my-slider technology' >
      <ul className='slider-wrapper ' >
        {technology.map((item) => (
          <li className='slider-element' key={item.name}>
            <div>
            <img className='technology-img' src={`${item.images.portrait}`} alt={item.name} />
            <img className='technology-img--mobile'src={`${item.images.landscape}`} alt={item.name}></img>
            </div>
            <div className='technology-info'>
            <p className='technology-info__terminology'>The terminology...</p>
            <h2 className='technology-info__name'>{item.name}</h2>
            <p className='technology-info__description paragraph'>{item.description}</p>
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
