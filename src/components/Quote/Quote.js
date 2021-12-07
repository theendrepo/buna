import React from 'react'
import useHomeQuery from '../hooks/useHomeQuery'

const Quote = () => {
    const homeData = useHomeQuery();
    let quote = '';

    if(homeData.wpPage.quote.quote){
      quote = homeData.wpPage.quote.quote;
    } 
    console.log("quote",quote);

    // if(!quote) return <></>;
    return (
      <section className="quote container" dangerouslySetInnerHTML={{ __html:quote}}>
      </section>
    )
}

export default Quote
