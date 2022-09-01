import React from 'react'
import PageLocation from '../components/PageLocation'
import { useState } from 'react';

export default function CreateOrder() {
    const [price, setPrice] = useState(0);
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const [bahanbakar, setBahanbakar] = useState('')
    const bahanBakar = (e) => {
        setBahanbakar(e.target.value)
    }
    return (
        <>
            <div className='main'>
                <PageLocation judul="Buat Pesanan" />
                <div className="create-order">
                    <h1>Identitas</h1><hr />
                    <p className='input-label'>Atas Nama</p>
                    <input className='input-text' type="text" placeholder='Nama Lengkap' />
                    <p className='input-label'>No Telp</p>
                    <input className='input-text' type="text" placeholder='Nomor yang dapat dihubungi' />
                    <br />
                    <br />
                    <div className="alamat">
                        <img src="https://bensin-online.web.app/img/pngegg.53ec9298.png" />
                        <p className="address">jl. kenangan no 27 kec Teluk, Meranggen, Semarang Timur</p>
                        <p className='ganti'>ganti</p>
                    </div>
                    <h1>Kendaraan</h1><hr />
                    <p className='input-label'>Tipe Kendaraan</p>
                    <select >
                        <option disabled="disabled" hidden="hidden">Pilih Tipe Kendaraan</option>
                        <option value="truck">Truck</option>
                        <option value="mobil">Mobil</option>
                        <option value="motor">Motor</option>
                    </select>
                    <p className='input-label'>Brand</p>
                    <input className='input-text' type="text" placeholder='*Contoh: Supra' />
                    <p className='input-label'>Nomor Polisi / Plat</p>
                    <input className='input-text' type="text" placeholder='*Contoh: T 1111 EST' />
                    <h1>Pesanan</h1><hr />
                    <p className='input-label'>Tipe Bahan Bakar</p>
                    <select onChange={bahanBakar}>
                        <option disabled="disabled" hidden="hidden">Pilih Tipe Bahan Bakar</option>
                        <option value="premium">Premium</option>
                        <option value="pertamax">Pertamax</option>
                        <option value="solar">Solar</option>
                    </select>
                    <p className='input-label'>Pembelian</p>
                    <input className='liter' type="number" placeholder='0' onChange={priceChange} />
                    <p className='price'>Rp.{bahanbakar === "premium" ? price * 8000 : price * 10000}</p>
                    <br />
                    <p className='input-label'>Kode Voucher</p>
                    <input className='input-text' type="text" placeholder='Masukkan Kode' />
                    <br />
                    <div className="item-pembayaran">
                        <p>Harga</p>
                        <p>2 L / Rp. 20,000.00</p>
                    </div>
                    <div className="item-pembayaran">
                        <p>Layanan</p>
                        <p>Rp. 1,500.00</p>
                    </div>
                    <div className="item-pembayaran">
                        <p>Promo</p>
                        <p>Rp. 0.00</p>
                    </div>
                    <div className="item-pembayaran">
                        <p>Total Pembayaran</p>
                        <p>Rp. 21,500.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}
