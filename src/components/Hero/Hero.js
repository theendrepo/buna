import * as React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import useHomeQuery from "../hooks/useHomeQuery"

const Hero = () => {
    const heroData = useHomeQuery();
    let hero = [];

    if(heroData.wpPage.hero){
        hero = heroData.wpPage.hero;
    }
    if(hero.length <= 0) return <></>;

    const heroImg = getImage(hero.heroImage.localFile);

    return (
        <section className="hero" style={{ backgroundImage: "url(" + heroImg.images.fallback.src + ")", }}>
            <div className="container">
            <div className="hero__title">
                <h1>{hero.heroTitle}</h1>
            </div>
            <div className="hero__desc">
                <p>{hero.heroDescription}</p>
            </div>
            <div className="hero__button">
                <Link to={hero.heroButtonLink} className="button button--pink">
                    {hero.heroButtonTitle}
                </Link>
            </div>
            </div>
        </section>
    )
}

export default Hero