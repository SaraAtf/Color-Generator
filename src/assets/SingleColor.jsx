import React from 'react'
import { toast } from 'react-toastify';

export default function SingleColor( { index, color } ) {
    const { hex, weight } = color;
    const saveToClipboard = async () => {
        if ( navigator.clipboard ) {
            try {
                await navigator.clipboard.writeText( `#${hex}` )
                toast.success( `#${hex} copies successfully to clipboard` )
            } catch ( error ) {
                toast.error( 'Failed to copy color to clipboard' )
            }
        } else {
            console.log( "Not Available" )
        }
    }
    return (
        <article
            onClick={saveToClipboard}
            className={`${index > 10 ? 'color color-light' : 'color'}`} style={{ background: `#${hex}` }
            }>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>#{hex}</p>

        </article >
    )
}
