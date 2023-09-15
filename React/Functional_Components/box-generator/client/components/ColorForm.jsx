import React, {useState} from 'react'


const ColorForm = (props) => {
    const [color, setColor] = useState("")
    const {colorArray, setColorArray} = props


/**
 * The function `getColor` adds a color to an array of colors.
 */
    const getColor = (e) => {
        e.preventDefault()
        setColorArray([...colorArray, color])
    }

    return (
        <>
            <form onSubmit={ getColor }>
                <label >Color:</label>
                <input type="text" value={color} name='color' 
                onChange={ (e) => setColor(e.target.value) }/>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default ColorForm

