import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './Zoom.scss'

const ZoomedImage = ({image, setActive}) => {
  return (
    <div className='zoom'>
      <div className="close__zoom">
        <li onClick={() => setActive(false)}>
          <AiOutlineClose />
        </li>
      </div>
      <div className="image">
        <img 
          src={image} 
          alt="image"
        />
      </div>
    </div>
  )
}

export default ZoomedImage