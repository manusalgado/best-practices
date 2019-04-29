import React from 'react'
import { Wrapper } from './styles'
import Content from '../Content'

const MainContent = ({title}) => {
    return (
        <Wrapper className='MainContent' role='main'>
            <h1 className='MainContent__title'>{title}</h1>
            <Content />
        </Wrapper>
    )
}

export default MainContent