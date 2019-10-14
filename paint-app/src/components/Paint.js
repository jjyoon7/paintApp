import React, { useState, useEffect } from 'react'
import Name from './Name'
import randomColor from 'randomcolor'
import Canvas from './Canvas'
import WindowSize from './WindowSize'
import ColorPicker from './ColorPicker'

export default function Paint() {
    const [colors, setColors] = useState([])
    const [activeColor, setActiveColor] = useState(null)

    const getColors = () => {
        // get the random colors in array but copying and choose the first on in the origianl array by slice(1) function
        const baseColor = randomColor().slice(1);
        // chose that one color and scheme mode quad is generating different colors based on it
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=quad`)
        .then(res => res.json())
        .then(res => {
            setColors(res.colors.map(color => color.hex.value))
            setActiveColor(res.colors[0].hex.value)
        })
    }

    useEffect(getColors, [])
    return (
        <header style={{ borderTop: `10px solid ${activeColor}`}}>
            <div className="app">
                <Name />
            </div>
            <div style={{ marginTop: 10}}>
                <ColorPicker 
                    colors={colors}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                />
            </div>
        </header>
    )
}