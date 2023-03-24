import React from 'react'
import ImageViewerItem from './ImageViewerItem.jsx'

export default function ImageViewer ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage}) {


  return (

    (Object.keys(currentStyle).length > 0) &&

    <div id="image-viewer-carousel" className="carousel w-full lg:w-[660px] items-center" >
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <ImageViewerItem key={i} i={i} photos={currentStyle.photos} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} changeImage={changeImage}/>
          )
        })
      }
    </div>

  )
}