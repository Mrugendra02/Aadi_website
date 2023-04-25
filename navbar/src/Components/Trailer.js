import React from 'react'

const Trailer = () => {
  return (
    <div  id = "trailer" className = "trailer">
     <div>
     <video controls >
      <source src="video.mp4" type="video/mp4"/>
     </video>
     </div>
    </div>
  )
}

export default Trailer
