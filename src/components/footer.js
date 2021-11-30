import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import useHomeQuery from "./hooks/useHomeQuery"

import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagramsvg.svg'
import linkedin from '../images/linkedIn.svg'

const Footer = () => {
    const homeData = useHomeQuery();
    const footerData = homeData.wpPage.footer;
    console.log("footerdataa", homeData );
    console.log("footerData.footerSocials.facebook", footerData.footerSocials.facebook)
    return (
        <footer className="footer">
            <div className="footer__details container">
            {footerData.footerEmail && 
            <h2 className="footer__email title-xl" dangerouslySetInnerHTML={{ __html: footerData.footerEmail }}></h2> }

            <div className="footer__socials">
                <ul>
                    {footerData.footerSocials.facebook &&
                    <li>
                        <a target="_blank" href={footerData.footerSocials.facebook}>
                            <img src={facebook} />
                        </a>
                    </li> }
                    {footerData.footerSocials.instagram &&
                    <li>
                        <a target="_blank" href={footerData.footerSocials.instagram}>
                            <img src={instagram} />
                        </a>
                    </li> }
                    {footerData.footerSocials.twitter &&
                    <li>
                        <a target="_blank" href={footerData.footerSocials.twitter}>
                            <img src={twitter} />
                        </a>
                    </li> }
                    {footerData.footerSocials.linkedin &&
                    <li>
                        <a target="_blank" href={footerData.footerSocials.linkedin}>
                            <img src={linkedin} />
                        </a>
                    </li> }
                </ul>
                <div className="copyright">©{new Date().getFullYear()} Havere Bunjaku</div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
