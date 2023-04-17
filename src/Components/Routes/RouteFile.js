import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
// import Technology from '../Pages/Technology'
// import Hollywood from '../Pages/Hollywood'
// import Fitness from '../Pages/Fitness'
// import Food from '../Pages/Food'
import Home from '../Pages/Home'
import Header from '../Pages/Header'
import TheLatest from '../Pages/SubPages/TheLatest'

const RouteFile = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/:pageName' element={<Bollywood />} />
                    {/* <Route path='/Technology' element={<Technology />} />
                    <Route path='/Hollywood' element={<Hollywood />} />
                    <Route path='/Fitness' element={<Fitness />} />
                    <Route path='/Food' element={<Food />} /> */}
                    <Route path='/:category/:id' element={<TheLatest/>}/>
                    

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteFile
