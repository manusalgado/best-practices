import React from 'react'
import { WrapperFooter } from './styles'

const Footer = () => {
    return (
        <WrapperFooter className='Footer'>
            <p>The first ebook in the book series is absolutely free.</p>
            <a className='btn' href='javascript:void()'>find out more about this offer</a>
        </WrapperFooter>
    )
}

export default Footer