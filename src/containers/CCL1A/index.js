import React from 'react'
import { SButton } from '../Home/styles'
import { Link } from 'react-router-dom'
import { Centered } from '../Home/styles'
import { TextAlign } from './styles'

const CCL1A = () => {
    return(
        <div>
            <TextAlign>
                Work in progress, sorry for the inconvince 
            </TextAlign>
            <Centered>
                <SButton>
                <Link to="/" style={{color: "white"}}>Go back</Link>
                </SButton>    
            </Centered>
        </div>
    )
}

export default CCL1A 