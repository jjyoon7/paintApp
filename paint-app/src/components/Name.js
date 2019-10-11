import React,  { useState } from 'react'

export default function Name() {
    const [name, setName] = useState('')
    return (
        <label className="header-name">
            <input 
                value={name}
                onChange={}
                onClick={}
                placeholder={untitled masterpiece}
            />
        </label>
    )
}