import React from 'react'
import './Explore.css'

const Explore = () => {
  return (
    <div className='explore'>

        <div className="explore-top">
            <div className="explore-title">
                Explore
            </div>

            <div className="explore-filter">
                Filter
            </div>
        </div>

        <div className="explore-bottom">
            <input type="text" className="search-bar" placeholder="Search" />
        </div>

    </div>
  )
}

export default Explore