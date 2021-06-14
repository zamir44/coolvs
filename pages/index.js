// import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Main from '../components/Main'
import SwipeOne from '../components/SwipeOne'
import Brands from '../components/Brands'
import SwipeTwo from '../components/SwipeTwo'
import History from "../components/History"
import CarouselSlider from "./carouselSlider"
import Layout from "../components/layout/Layout"


export default function Home() {
  return (
    <div> 
    
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout>
        <Main />
        <SwipeOne/>
        <Brands/>
        <SwipeTwo />
        <History/>
      </Layout>
    </div>
  )
}
