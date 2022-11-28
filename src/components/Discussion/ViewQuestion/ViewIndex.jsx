import React from 'react'
import Sidebar from '../StackOverflow/Sidebar';
import './index.css';
import MainQuestion from './MainQuestion';
const ViewIndex = () => {
  return (
    <div className="stack-index">
    <div className="stack-index-content">
     <MainQuestion />
    </div>
  </div>
  )
}

export default ViewIndex
