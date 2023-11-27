import React from 'react'
import './imagesCard.css'

const ImagesCard = ({ima, txt}) => {
  return (
      <div className="image-item">
        <img src= {ima} alt={`imagen ${txt}`} />
        <p>{txt}</p>
      </div>
  )
}

export default ImagesCard

/* "/public/Image --dalle(2).png" */