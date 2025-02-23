import { useEffect, useState } from "react"

const breakPoints = 576
const detectDevice = () => {
    return window.innerWidth <= breakPoints ? "MOBILE" : "DESKTOP"
}

const useWindowResize = () => {
    const [device, setDevice] = useState(() => detectDevice())

    useEffect(() => {
        const handleResize = () => {
            setDevice(detectDevice())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return device
}

export default useWindowResize