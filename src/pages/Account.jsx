import React from "react";
import NavBar from "../components/NavBar";
import PageLocation from "../components/PageLocation";

export default function Account() {
  return (
    <>
      <div className="main">
        <div className="akun">
          <NavBar />
          <div className="profile">
            <img
              src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
              alt=""
            />
            <div className="user-profile">
              <p className="user-name">M Naufal Adrian</p>
              <p className="email">naufal.adrian904@gmail.com</p>
            </div>
          </div>
          <div className="social-media facebook">
            <img src="https://bensin-online.web.app/img/facebook.60f532b7.svg" />
            <p>FOLLOW US ON FACEBOOK</p>
          </div>
          <div className="social-media instagram">
            <img src="https://bensin-online.web.app/img/instagram.4c7ce1b0.svg" />
            <p>FOLLOW US ON INSTAGRAM</p>
          </div>
          <button>LOG OUT</button>
          <PageLocation judul="Akun" />
        </div>
      </div>
    </>
  );
}
