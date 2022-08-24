import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginPage() {
  const navigate=useNavigate()
  const login= ()=>{
navigate('/home')
  }
  return (
    <>
    <div className='main'>
        <div className='login'>
        <div className='title'>
            <h1>Selamat Datang</h1>
            <p>Silahkan Login untuk masuk ke akun anda</p>
        </div>
        <div className='login-card'>
            <input type='text' placeholder='Username'/>
            <input type='password' placeholder='Password'/>
            <p>Lupa Password</p>
            <button onClick={login}>Masuk</button>
        </div>
        <p className='create-account'>Belum punya akun? <span>Buat</span></p>
        </div>
    </div>
    </>
  )
}
