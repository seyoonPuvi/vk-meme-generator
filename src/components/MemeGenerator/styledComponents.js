// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 30px;

    @media (max-width:700px) {
        flex-direction:column;
        row-gap:20px;
        
    }

`

export const MainContainer = styled.form`
    width:30%;
    min-width:350px;
    padding:20px 20px;
    display:flex;
    flex-direction:column;
    row-gap:10px;

    @media (max-width:700px) {
            order:10;
    }
`

export const Heading = styled.h1`
font-weight:bold;
text-align:center;
color:darkblue;
font-size:30px;
`

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:5px;
`

export const Label = styled.label`
    color:grey;
    font-size:15px;
`

export const Input = styled.input`
    padding:10px 20px;
    border:1px solid grey;
    border-radius:5px;
    font-size:18px;
    width:100%;
`

export const Select = styled.select`
    width:100%;
    padding:10px 20px;
    font-size:18px;
`

export const Option = styled.option`
    width:100%;
`

export const Button = styled.button`
    background-color:darkblue;
    border:none;
    outline:none;
    border-radius:5px;
    padding:10px 20px;
    color:white;
`

export const MemeContainer = styled.div`
    background-image:url(${props => props.imageUrl});
    height:250px;
    width:400px;

    background-size:cover;
    background-position:center;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;


`
export const Text = styled.p`
  color: white;
  font-weight: bold;
  font-size: ${props => props.size}px;  
  text-align: center;
`
