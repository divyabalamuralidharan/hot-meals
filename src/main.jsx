import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './Header.jsx'
import Header from './Header.jsx'
import Background from './Background'
import Imagegrid from './Image-grid'
import How from './How'
import Three from './Three'
import Seafood from './Seafood'
import Jump from './Jump'
import Popular from './Popular'
import Five from './Five'
import Five2 from './Five2'
import Footerpart from './Footerpart'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* { <App /> } */}
   <Header/>
   <Background/>
   <Imagegrid/>
   <How/>
   <Three/>
   <Seafood/>
   <Jump/>
   <Popular/> 
  <Five/>
  <Five2/>
  <Footerpart/>
 
   

  </React.StrictMode>,
)
