import React from 'react'
import {Link} from 'gatsby'
import useHomeQuery from '../hooks/useHomeQuery'

const Partners = () => {
    const homeData = useHomeQuery();
    console.log('homeData', homeData);
    let partners = [];
    if(homeData.wpPage.partners) partners = homeData.wpPage.partners.partners;
    if(!partners.length) return <></>
    
    return (
      <section className="partners-wrap container">
          <h2 className="gray-title text-center">Partners</h2>
          <div className="partners">
            { partners.map((partner) => 
              <Link className="partners__item"  to={partner.link} >
                <img src={partner.image.localFile.url} alt="" />
              </Link>
            ) }
          </div>
      </section>
    )
}

export default Partners
