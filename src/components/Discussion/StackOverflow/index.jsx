import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import Header from '../Header/index';
import "./css/index.css";
const Index = () => {
  return (
    <div>
        <Header />
         <div className="stack-index">
      <div className="stack-index-content">
        <Main />
      </div>
    </div>
    </div>
  )
}

export default Index
