import { useEffect, useState } from 'react'

function sticky() {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 47 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isSticky }
}

export default sticky