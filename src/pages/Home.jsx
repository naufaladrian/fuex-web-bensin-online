import React from "react";
import FeaturesItem from "../components/FeaturesItem";
import NavBar from "../components/NavBar";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const isiBensin = () => {
    navigate("/isibensin");
  };
  function konsultasi() {
    window.open("https://api.whatsapp.com/send?phone=6289504731540&text=Saya%20Mau%20Konsultasi%20Nih%20Kak")
    console.log("test");
  }
  return (
    <>
      <div className="main">
        <div className="home">
          <div className="features">
            <div className="welcome">
              <h1>Selamat Datang</h1>
              <p>M Naufal Adrian</p>
            </div>
            <div className="features-card">
              <FeaturesItem
                img="https://bensin-online.web.app/img/bensin.83b9a03c.svg"
                text="Isi Bensin"
                action={isiBensin}
              />
              <FeaturesItem
                img="https://bensin-online.web.app/img/konsultasi.f4372147.svg"
                text="Konsultasi"
                action={konsultasi}
              />
              <FeaturesItem
                img="https://bensin-online.web.app/img/kupon.7834ca27.svg"
                text="Voucher"
              />
            </div>
          </div>
          <div className="services">
            <p className="coming-soon">Coming Soon!</p>
            <div className="services-container">
              <FeaturesItem
                img="https://bensin-online.web.app/img/tambalBan.4b4dfb14.svg"
                text="Tambal Ban"
              />
              <FeaturesItem
                img="https://bensin-online.web.app/img/serviceUmum.361cf94c.svg"
                text="Service Umum"
              />
              <FeaturesItem
                img="https://bensin-online.web.app/img/keranjang.ca1ff472.svg"
                text="Beli & Pasang"
              />
              <FeaturesItem
                img="https://bensin-online.web.app/img/danger.ac3c6d23.svg"
                text="Darurat"
              />
            </div>
          </div>
          <div className="adds">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn0-production-images-kly.akamaized.net/lgmktfp4I-p4H2xQ1XhKkFOKn5I=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3024986/original/098144600_1579251405-DANA_2020.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mahatekno.com/wp-content/uploads/2020/09/contoh-iklan-komersial.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://img.cintamobil.com/crop/640x360/2021/01/19/cWC5a43e/trai-nghiem-mua-xe-resize-201225-03-3db2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <NavBar />
        </div>

      </div>
    </>
  );
}
