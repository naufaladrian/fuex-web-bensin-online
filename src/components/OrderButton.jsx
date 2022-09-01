import React from 'react'

export default function OrderButton({ text, action }) {
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={action} className='order-button'>{text}</button>
        </div>
    )
}
