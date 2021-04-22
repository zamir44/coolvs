import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <style jsx global>{`
      .avatar {
        background-image: linear-gradient(to bottom right, red, yellow);
        position: relative;
        z-index: 100;
        height: 100px;
      }

      .overlay::before {
        content: '';
        position:absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
        z-index: 1;
    }
    `}</style>
      <Navbar/>
      <Main/>
    </div>
  )
}
