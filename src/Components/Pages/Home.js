import React, { useContext } from 'react'
import '../CSS/Home.css'
import { Store } from '../ContextAPI/ConTextAPI'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [dataContext] = useContext(Store);
    const navigate = useNavigate();
    const handleClick = (id, item, category) => {// two arg - 1. pathname - 2. state
        navigate(`/latest/${id}`, { state: { item , category} });
    };
    return (
        <div className={'Home'}>

            <div className={'TitleImages-Box'}>
                <img src={dataContext.natureImages.logo1} className={'Title-images Title-images-one'} alt="BigCo Inc. logo" width={'800px'} height={'600px'} />
                <div className={'TitleImagesSub-Box'}>
                    <img src={dataContext.natureImages.logo2} className={'Title-images Title-images-two'} alt="BigCo Inc. logo" width={'449px'} height={'295px'} />
                    <img src={dataContext.natureImages.logo3} className={'Title-images Title-images-three'} alt="BigCo Inc. logo" width={'449px'} height={'295px'} />
                </div>
            </div>
            <p className='Heading-Latest'>The Latest</p>

            <div className='The-Latest-Box'>
                {
                    dataContext.latest.map((item, index, category) => (
                        <div className='The-Latest-Child' key={index}>
                            <div>
                                <img className='The-Latest-Images' src={item.image.one} alt={item.image} onClick={() => handleClick(item.id, item, category)} height={'200px'} width={'400px'}/>
                            </div>
                            <div className='Content'>
                                <h2>{item.heading} :</h2>
                                <h2>{item.contentLine}</h2>
                                <p className='item-news'>{item.news} / {item.date}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='Latest-Articles'>
                
            </div>
        </div>
    )
}

export default Home
