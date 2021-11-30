import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__details container">
            <h2 className="footer__email title-xl">hi@quollion.com</h2>
            <div className="footer__socials">
                <ul>
                <li>
                    <a href="#"
                    ><img
                        src="https://cocky-pike-4321e0.netlify.app/dist/img/facebook.svg"
                    /></a>
                </li>
                <li>
                    <a href="#"
                    ><img
                        src="https://cocky-pike-4321e0.netlify.app/dist/img/twitter.svg"
                    /></a>
                </li>
                <li>
                    <a href="#"
                    ><img
                        src="https://cocky-pike-4321e0.netlify.app/dist/img/behance.svg"
                    /></a>
                </li>
                <li>
                    <a href="#"
                    ><img
                        src="https://cocky-pike-4321e0.netlify.app/dist/img/linkedIn.svg"
                    /></a>
                </li>
                </ul>
                <div className="copyright">© 2020. Designed by JohnDoe.</div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
