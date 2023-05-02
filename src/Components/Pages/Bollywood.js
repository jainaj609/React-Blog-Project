import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/Bollywood.css'
import { Store } from '../ContextAPI/ConTextAPI'
import Header from './Header';
const Bollywood = () => {
  const [dataContext] = useContext(Store);
  const navigate = useNavigate();
  const { pageName} = useParams();
  var key;
  for(var k in dataContext){
    if(k===pageName)
    {
      key = k;
      break;
    }
  }

  const handleNavigation = (id, item, category) => {// two arg - 1. pathname - 2. state
    navigate(`/${key}/${id}`, { state: { item, category } });
  };
  return (
    <div>
      <Header/>
      <div className='section'>

        <div className='Bollywood'>
          <p className='Heading-Bollywood'>{pageName}</p>

          <div className='boxes'>
            {dataContext[pageName].map((item, index, category) => (
              <div className='box-container' key={index}>
                <div className='box' onClick={() => handleNavigation(item.id, item, category)}>
                  <div>
                    <img className='Images-Mobile' src={item.image.one} alt='item.heading' height={'184px'} width={'308px'} />
                  </div>
                  <div className='content'>
                    <h3>{item.heading}</h3>
                    <p className='contentLine'>{item.contentLine}</p>
                    <p><span className='released_year'>Released :</span> {item.released}</p>
                  </div>
                </div>
                <hr className='hrline' />
              </div>
            ))

            }
          </div>

        </div>
        <div className='Box-in-Column'>
          <div className='Top-Posts'>
            <p className='Heading-Top-Posts Heading-Bollywood'>Top Posts</p>

            <div className='boxes1' >

              {dataContext[pageName].map((item, index) => (
                item.id === 1 ?
                  <div key={index}>
                    <div className='first-content'>
                      <div>
                        <img className='TopPost_firstImage' src={dataContext[pageName][0].image.one} alt='' height={'266px'} width={'452px'} />
                      </div>
                      <div className='inline-content'>
                        <h3>{dataContext[pageName][0].heading}</h3>
                        <h1>1</h1>
                      </div>
                      <p className='grey'><span className='released_year'>Released :</span> {dataContext[pageName][0].released}</p>
                    </div>
                    <hr className='hrline' />
                  </div>
                  : index < 4 ?
                    <div className='box-container1' key={index}>
                      <div className='box1'>
                        <div>
                          <img className='Images-Mobile' src={item.image.one} alt='item.heading' height={'104px'} width={'150px'} />
                        </div>
                        <div className='content1 content1-style'>
                          <div className='inline-content1'>
                            <h3>{item.heading}</h3>
                            <h1>{item.id}</h1>
                          </div>
                          <p className='grey'><span className='released_year'>Released:</span> {item.released}</p>
                        </div>
                      </div>
                      <hr className='hrline' />
                    </div> : null

              ))
              }
            </div>

          </div>
          <div className='Advertisement-Box'>Advertisement</div>
        </div>
      </div>
    </div>
  )
}

export default Bollywood
