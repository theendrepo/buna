import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import AboutUsContent from "../components/AboutUs/AboutUsContent/AboutUsContent"
import AboutUsTeam from "../components/AboutUs/AboutUsTeam/AboutUsTeam"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import useAboutQuery from "../components/hooks/useAboutQuery"

const About = () => {
    const aboutQuery = useAboutQuery();
    let aboutData = [];

    if(aboutQuery.wpPage){
        aboutData = aboutQuery.wpPage;
        var featuredImage = aboutData.featuredImage ? aboutData.featuredImage.node.localFile : false;
        var subTitle = aboutData.about.aboutUsSubtitle ? aboutData.about.aboutUsSubtitle : '';

    }
    if( aboutData.length <= 0){
        return (
            <Layout>
                <Seo title={aboutData.title} />
                <PageHeader title={"No content here"}/>
            </Layout>
        )   
    } 

    return(
        <Layout>
            <Seo title={aboutData.title} />
            <AboutUsContent featuredImg={featuredImage} subTitle={subTitle} content={aboutData.content}/>
            {/* <AboutUsTeam team={aboutData.about.ourTeam}/> */}
        </Layout>
    )
}
export default About
