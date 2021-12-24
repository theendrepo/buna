import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/PageHeader/PageHeader"

import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import useContactQuery from "../components/hooks/useContactQuery"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const Contact = () => {
  const client = new ApolloClient({
    uri: 'http://buna.local/graphql',
    cache: new InMemoryCache()
  });

  const contactData = useContactQuery();
  let contactInfo = [];

  if(contactData.wpPage.contact.contactInfo){
    contactInfo = contactData.wpPage.contact.contactInfo;
  }
  if(contactInfo.length <= 0){
      return (
          <Layout>
              <PageHeader title={"No content here"}/>
          </Layout>
      )   
  }

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Seo title="Contact" />
        <ContactInfo contactInfo={contactInfo} />
        <ContactForm />
      </Layout>
    </ApolloProvider>
  )
}

export default Contact
