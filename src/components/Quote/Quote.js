import React from 'react'
import useHomeQuery from '../hooks/useHomeQuery'

const Quote = () => {
    const homeData = useHomeQuery();
    let quote = '';

    if(homeData.wpPage.quote.quote){
      quote = homeData.wpPage.quote.quote;
    } 
    // if(!quote) return <></>;
    return (
      <section class="quote container">
        <p dangerouslySetInnerHTML={{ __html: quote }}></p>
      </section>
    )
}

export default Quote
