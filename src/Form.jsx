import React, { useState } from 'react'

export default function Form() {
    const [ color, setColor ] = useState( '' )
    const submitHandler = ( e ) => { e.preventDefault() }
    return (
        <section className='container'>
            <h4 >Color Generator</h4>
            <form className='color-form' onSubmit={submitHandler}>
                <input type="color" value={color} onChange={( e ) => setColor( e.target.value )} />
                <input type="text" value={color} placeholder='#f15025' onChange={( e ) => setColor( e.target.value )} />
                <button className='btn' type='submit' style={{ background: color }}>Submit</button>
            </form>
        </section>
    )
}
