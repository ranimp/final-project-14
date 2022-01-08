import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>
        <footer class="px-8 pt-8 footer bg-light-green text-dark-green capitalize">
          <div>
            <img src={logo} alt='logo'></img>
          </div> 
          <div>
            <span class="footer-title">layanan</span> 
            <a class="link link-hover">konsultasi</a> 
            <a class="link link-hover">testimoni</a> 
            <a class="link link-hover">psikolog</a> 
            <a class="link link-hover">workshop</a>
            <a class="link link-hover">bantuan</a>
          </div> 
          <div>
            <span class="footer-title">dukungan</span> 
            <a class="link link-hover">tentang kami</a> 
            <a class="link link-hover">kebijakan privasi</a> 
            <a class="link link-hover">partnership</a> 
            <a class="link link-hover">FAQ</a>
          </div> 
          <div>
            <span class="footer-title">sosial media</span> 
            <div class="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" height="24" viewBox="0 0 24 24" className="stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a> 
            </div>
          </div>
        </footer>
        <footer class="py-5 footer bg-light-green text-dark-green capitalize footer-center">
        <div>
          <p>copyright © 2021 MS Wellbeing Center</p>
        </div>
      </footer>
      </>
    )
}