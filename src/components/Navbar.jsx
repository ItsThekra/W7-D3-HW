import React from 'react'
import { Link } from "react-router";
import "../assets/styles/Navbar.css";


export default function Navbar() {
  return (
    <nav>
          <Link to ="/HistoricJeddah">
          <div class="card" id="HistoricJeddah"> 
          <p class="heading">
              جــــدة 
            </p>
            <p>
              جــدة التاريخية
            </p>
            </div>
           </Link>

            <Link to="/JeddahRally">
          <div class="card" id="JeddahRally"> 
          <p class="heading">
              جــــدة 
            </p>
            <p>
             رالــــــــي جــــدة
            </p>
            </div>
           </Link>

            <Link to="/JeddahReads">
          <div class="card" id="JeddahReads"> 
          <p class="heading">
              جــــدة 
            </p>
            <p>
              جــــــدة تقــــــــــــرأ
            </p>
            </div>
           </Link>

            <Link to="/Promenade">
          <div class="card" id="Promenade"> 
          <p class="heading">
              جــــدة 
            </p>
            <p>
              بــــرومـــيناد جـــــدة
            </p>
            </div>
           </Link>

            <Link to="/QamaraGallery">
          <div class="card" id="QamaraGallery"> 
          <p class="heading">
              جــــدة 
            </p>
            <p>
              معـــــرض القــــمرا
            </p>
            </div>
           </Link>  
    </nav>
  );
}
