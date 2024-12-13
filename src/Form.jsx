import React, { useState } from 'react'

export default function Form( { addColor } ) {
    const [ color, setColor ] = useState( '#5c1c6d' )
    const submitHandler = ( e ) => {
        e.preventDefault()
        addColor( color )
    }
    return (
        <section className='container'>
            <h4 >Color Generator</h4>
            <form className='color-form' onSubmit={submitHandler}>
                <input type="color" value={color} onChange={( e ) => setColor( e.target.value )} />
                <input type="text" value={color} placeholder='#5c1c6d' onChange={( e ) => setColor( e.target.value )} />
                <button className='btn' type='submit' style={{ background: color }}>Submit</button>
            </form>
        </section>
    )
}
