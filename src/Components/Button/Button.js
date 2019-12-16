import React from 'react'
import { StyledButton } from './Button.styled'

const Button = (props) => {
    return(
        <StyledButton 
            onClick={props.onClick}
            textColor={props.textColor ? props.textColor : null}>

            {props.text} 

        </StyledButton>
    )
}

export default Button
