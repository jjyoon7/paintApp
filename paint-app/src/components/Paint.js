import React from 'react'
import Name from './Name'
import ColorPicker from './ColorPicker'
import randomColor from 'randomcolor'


export default function Paint() {

    return(
        <header>
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