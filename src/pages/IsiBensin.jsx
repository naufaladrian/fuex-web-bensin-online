import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import OrderButton from '../components/OrderButton'
import PageLocation from '../components/PageLocation'

export default function IsiBensin() {
    const navigate = useNavigate();
    const createOrder = () => {
        navigate("/buatpesanan")
    }
    return (
        <>
            <div className='main'>
                <PageLocation judul="Pilih Lokasi" />
                <div className='isi-bensin'>
                    <p className='information'>Untuk Saat Ini Karena PPKM, Kami Hanya Melayani Sekitaran Kota Semarang</p>
                    <hr />
                    <div className='alamat'>
                        <p>Alamat</p>
                        <select >
                            <option>Pilih Lokasi</option>
                            <option value="">kec Gunung Pati, Ngaliyan, Semarang Barat</option>
                            <option value="">kec Teluk, Meranggen, Semarang Timur</option>
                            <option value="">kec Tugu, Tugu, Semarang Barat</option>
                        </select>
                    </div>

                    <hr />
                    <div className='input-detail-alamat'>
                        <p>Detail Alamat</p>
                        <input type="text" placeholder='Nama Jalan, RT/RW, Nomor bangunan' />
                    </div>
                    <hr />
                    <OrderButton text="Pilih" action={createOrder} />
                </div>
                <NavBar />
            </div>
        </>
    )
}