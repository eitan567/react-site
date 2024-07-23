import { NavLink } from 'react-router-dom';
// import Logo from '../assets/logo.png';
import LogoAlgo from '../assets/logo4.png';
// import SVGLogo from '../assets/logo.svg';


const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto text-right py-6 px-4">
      <nav>
        <ul className="flex justify-end flex-row-reverse space-x-8 text-gray-600 font-black text-xl" style={{ direction: 'rtl',position:"relative" }}>
          <img src={LogoAlgo} alt="logo" className='pulse-logo'/>
          {/* <div className="pulse-logo-svg" style={{backgroundSize: "cover",backgroundPosition: "center",backgroundImage: `url(${SVGLogo})`}}/> */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}
            >
              צור קשר
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}
            >
              אודות
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/returns"
              className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}
            >
              תשואות
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/strategy"
              className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}
            >
              אסטרטגיות
            </NavLink>
          </li>
          <li style={{ paddingRight:"200px"}}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? "text-[#425d8d]" : "text-gray-600"}
            >
              דף הבית
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
