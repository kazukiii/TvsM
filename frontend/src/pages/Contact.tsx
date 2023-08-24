import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import ContactForm from '../components/contact/ContactForm.tsx'


const Home: FC = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
