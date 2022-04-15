import React from 'react'
import styled from 'styled-components'

export const ThreeColumnWrapper = styled.div`
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:40px;
    max-width: 1024px; 

    @media (max-width: 1180px){
        margin: 50px;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 900px){
        margin: 20px;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px){
        margin: 20px;
        grid-gap: 20px;
        grid-template-columns: 1fr;
    }
`
