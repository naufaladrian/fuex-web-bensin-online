import React from "react";
import NavBar from "../components/NavBar";
import PageLocation from "../components/PageLocation";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const orderData = [
    {
      fuel: "Pertalite - liter",
      vehicle: "Motor",
      orderTime: "2022-03-12 10:58:13",
      address: "jl. kenangan no 27 kec Teluk, Meranggen, Semarang Timur ",
      status: "Dalam Perjalanan",
    },
    {
      fuel: "Pertalite - liter",
      vehicle: "Motor",
      orderTime: "2022-03-12 10:58:13",
      address: "jl. kenangan no 27 kec Teluk, Meranggen, Semarang Timur ",
      status: "Menunggu Konfirmasi",
    },
  ];
  const navigate = useNavigate();

  const detail = () => {
    navigate("/orderdetail")
  }
  return (
    <>
      <div className="main">
        <div className="orders">
          <PageLocation judul="Pesanan" />
          {orderData.map((item, i) => (
            <div className="order-container" onClick={detail} key={i}>
              <div className="order-item">
                <p className="service-type">Isi Bensin</p>
                <div className="service-desc">
                  <img
                    src="https://bensin-online.web.app/img/bensin.83b9a03c.svg"
                    alt="!#"
                  />
                  <p>{item.fuel}</p>
                </div>
                <p className="vehicle">{item.vehicle}</p>
              </div>
              <div className="customer-info">
                <p className="order-time">{item.orderTime}</p>
                <p className="order-address">
                  {item.address}
                </p>
                <p className={item.status === "Dalam Perjalanan" ? "order-status perjalanan" : item.status === "Batal" ? "order-status batal" : item.status === "Menunggu Konfirmasi" ? "order-status menunggu" : "order-status selesai"}>{item.status}</p>
              </div>
            </div>
          ))}

          <NavBar />
        </div>
      </div>
    </>
  );
}
