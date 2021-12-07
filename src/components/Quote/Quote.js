import React from 'react'
import useHomeQuery from '../hooks/useHomeQuery'

const Quote = () => {
    const homeData = useHomeQuery();
    let quote = [];

    if(homeData.wpPage.quote.quote) quote = homeData.wpPage.quote.quote;
    if(quote.length == 0) return <></>;

    return (
      <section class="quote container">
      { quote && 
          <p dangerouslySetInnerHTML={{ __html: quote }}></p>
      }
      </section>
    )
}

export default Quote
