import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/home");
  };
  const order = () => {
    navigate("/orders");
  };
  const help =()=>{
    navigate("/help")
  }
  return (
    <div className="navigasi">
      <div className="navigasi-item">
        <img onClick={home} src="https://bensin-online.web.app/img/home.909e97d6.svg" />
        <p>Home</p>
      </div>
      <div className="navigasi-item">
        <img onClick={order} src="https://bensin-online.web.app/img/pesanan.99cfb2f7.svg" />
        <p >Pesanan</p>
      </div>
      <div className="navigasi-item">
        <img onClick={help} src="https://bensin-online.web.app/img/help.0dcc611a.svg" />
        <p>Bantuan</p>
      </div>
      <div className="navigasi-item">
        <img src="https://bensin-online.web.app/img/account.7f6cf170.svg" />
        <p>akun</p>
      </div>
    </div>
  );
}
