import { useEffect, useState } from "react"

const useCopyToClipboard = (duration) => {
    const [copiedContent, setCopy] = useState(false)

    const makeCopy = (value) => {
        if (typeof value === "string" || typeof value === "number") {
            navigator.clipboard.writeText(value)
            setCopy(true)
        } else {
            setCopy(false)
        }
    }

    useEffect(() => {
        let timeout
        if (copiedContent) {
            timeout = setTimeout(() => setCopy(false), duration ?? 3000);
        }

        return () => clearTimeout(timeout)
    }, [copiedContent])

    return { makeCopy, copiedContent }
}

export default useCopyToClipboard