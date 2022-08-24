import React from 'react'

export default function FeaturesItem({img, text}) {
  return (
    <div className="fitur-ikon">
    <img src={img}/>
    <p>{text}</p>
  </div>
  )
}
