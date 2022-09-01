import React from 'react'

export default function FeaturesItem({ img, text, action }) {
  return (
    <div className="fitur-ikon">
      <img src={img} onClick={action} />
      <p>{text}</p>
    </div>
  )
}
