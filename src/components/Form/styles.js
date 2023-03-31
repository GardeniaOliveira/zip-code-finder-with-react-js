import styled from 'styled-components';

// export const Container = styled.div`
//  min-height: 100vh;

// `
export const FormArea = styled.div`
background-color: #083344;
  min-height: 240px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: white;
border-radius: 12px;

`
export const Title = styled.h1`
text-transform: uppercase;
text-align: center;
margin: 10px auto;
font-size: 26px;
`
export const InputLabel = styled.p`
margin: 10px auto;
`
export const InputTitle = styled.p`
margin: 10px auto;
font-size: 16px;
`

export const Form = styled.form`
display: flex;
gap: 10px;


input[type="text"] {
    border: 1px solid transparent;
    color: black;
    border-radius: 5px;
    padding: 10px;
    outline-color:#083344;
    
    
  }
`
export const Button = styled.button`
background-color: #0284c7;
    border: 0;
    color: white;
    padding: 10px 14px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
     background-color: #06b6d4;
    }
`

export const Result = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: black;

`

export const TitleCode = styled.h2`
text-transform: uppercase;
text-align: center;
margin: 10px auto;
font-size: 22px;
color: black;
`

export const Address = styled.p`

text-align: center;
margin: 10px auto;
font-size: 20px;
color: black;
`