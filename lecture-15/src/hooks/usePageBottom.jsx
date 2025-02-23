import { useEffect, useState } from "react"

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setBottom(true)
            } else (
                setBottom(false)
            )
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return bottom
}

export default usePageBottom