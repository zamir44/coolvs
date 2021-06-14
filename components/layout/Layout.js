import Navbar from "../Navbar"
import Footer from "../Footer"
import useSticky from "../../hooks/useSticky"

const Layout = ({children}) => {
  const { isSticky } = useSticky()
    return (
        <>
          <Navbar sticky={isSticky} />
          {children}
          <Footer />
        </>
    )

    
            }

export default Layout