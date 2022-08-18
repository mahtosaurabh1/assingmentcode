import { Link } from 'react-router-dom';
import './navbar.css'
function NavBar() {
  return (
    <>
      <header >
      <img className="logo" src="https://dune.com/assets/glyph-128w.png" />
        <div className="options">
        <li><Link  to='/'>Home</Link></li>
         <li><Link to='/piecompo'>Piecompo</Link> </li>
         <li><Link to='/barcompo'>BarCompo</Link></li>
        <li><Link to='/areacompo'>Areacompo</Link></li>
        <li><Link to='/histogram'>Histogram</Link></li>
        
        </div>
      </header>
    </>
  );
}
export default NavBar;
