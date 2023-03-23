import React from 'react'
import ImageViewer from './ImageViewer.jsx'


export default function FullScreenModal ({currentStyle}) {


  return (
    <div>
      <input type="checkbox" id="full-screen-modal" className="modal-toggle"></input>
      <label for="full-screen-modal" className="modal cursor-pointer">
        <label className="modal-box relative max-w-none w-[95%] h-full" for="">
        <label htmlFor="full-screen-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>


          {/* <ImageViewer currentStyle={currentStyle}/> */}



        </label>
      </label>
    </div>
  )
}