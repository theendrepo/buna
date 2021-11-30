import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useMenuQuery from "../components/hooks/useMenuQuery";
import Logo from '../images/buna.svg'

const Header = ({ siteTitle }) => {
  const menuData = useMenuQuery();
  const menuItems = menuData.wpMenu.menuItems.nodes;

  const [navActive, setNavActive] = useState(false);
  const handleMobNav = () => {
    setNavActive( (prevState) => !prevState );
  }

  return(
    <header>
      <div className="container flex-j-sb">
        <div className="logo">
          <Link to="/">
            <img src={Logo}
          /></Link>
        </div>
        <nav className="main-nav">
          <ul>
          {menuItems.map((item) =>
              <li>
                <Link to={item.url} activeClassName="active">
                    {item.label}
                </Link>
              </li>
          )}
          </ul>
        </nav>
        <nav className={navActive ? 'mobile-nav active' : 'mobile-nav'}>
          <ul>
            {menuItems.map((item) =>
              <li>
                <Link to={item.url} activeClassName="active" >
                    {item.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <button className={navActive ? 'mobile-nav-btn active' : 'mobile-nav-btn'} onClick={handleMobNav} >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
