import styled from 'styled-components';

export const Container = styled.div`
background-color: #083344;
  min-height: 50vh;
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
    color: white;
    border-radius: 5px;
    padding: 14px;
    
  }

input[type="submit"] {
    background-color: #0284c7;
    border: 0;
    color: white;
    padding: 14px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`