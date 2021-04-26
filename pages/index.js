import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Main />
      <Showcase />
      <Footer />
    </div>
  )
}
