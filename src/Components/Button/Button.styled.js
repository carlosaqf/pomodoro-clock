import styled from 'styled-components'

const BLACK = '#000000';

export const StyledButton = styled.button`
    font-size: 0.875em;
    border-radius: 0.250em;
    border: none;
    padding: 0 1em 0 1em;
    width: 6em;
    height: 2.25em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-align: center;
    
    //Clock Button Style
    background: #FFFFFF;
    border: 1px solid #000000;
    color: ${props => props.textColor || {BLACK}};
    margin: 0.5rem 0.5rem 0 0.5rem;
`
// 16px base; 64px = 4em, 36px = 2.25em, 4px = 0.250em, 14px = 0.875em

// Contained Button -
// min-width: 64dp
// height: 36dp
// padding: 16dp each side
// corners rounded: 4dp
// elevation: 2dp
// font-size: 14dp

// Contained Button w/ Icon -
// padding before icon: 12dp
// padding after icon before text: 8dp

//@media only screen and (min-width: 768px)
// For everything bigger than 768px ^
