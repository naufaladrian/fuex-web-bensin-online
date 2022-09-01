import React from "react";
import PageLocation from "../components/PageLocation";

export default function OrderDetail() {

    return (
        <>
            <div className="main">
                <PageLocation judul={'Detail Pesanan'} />
                <div className="order-detail">
                    <h1>Identitas</h1><hr />
                    <p className="input-label">Atas Nama</p>
                    <p className="value">Naufal</p>
                    <p className="input-label">No Telp</p>
                    <p className="value">088877776666</p>
                    <p className="input-label">Alamat</p>
                    <div className="alamat">
                        <img src="https://bensin-online.web.app/img/pngegg.53ec9298.png" />
                        <p className="address">jl. kenangan no 27 kec Teluk, Meranggen, Semarang Timur</p>
                    </div>
                    <h1>Kendaraan</h1><hr />
                    <p className="input-label">Tipe Kendaraan</p>
                    <p className="value">Motor</p>
                    <p className="input-label">Brand</p>
                    <p className="value">Vario</p>
                    <p className="input-label">Plat</p>
                    <p className="value">T 1111 EST</p>
                    <h1>Pesanan</h1><hr />
                    <p className="input-label">Tipe Bahan Bakar</p>
                    <p className="value">Pertalite</p>
                    <p className="input-label">Jumlah</p>
                    <p className="value">1 Liter</p>
                    <h1>Detail Pembayaran</h1><hr />
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
                    <p className="status">Dalam Perjalanan</p>
                    <p className="note">Dengan Memesan Kami Anggap Anda Setuju Dengan Syarat & Ketentuan Bahan Bakar</p>
                </div>
            </div>
        </>
    );
}
