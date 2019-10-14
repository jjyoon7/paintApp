import React, { useState, useEffect } from 'react'
export default function WindowResize() {
    const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const handleResize = () => {

        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
}