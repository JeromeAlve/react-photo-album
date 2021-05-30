import styled from 'styled-components'

const Button = styled.button`
      font-family: Courier New;
      display: inline-block;
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      display: block;
`

const Title = styled.h1`
      font-family: Courier New;
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
`

const Text = styled.h2`
      font-family: Courier New;
      font-size: 1.0em;
      text-align: center;
      color: palevioletred;
`

const ListItem = styled(Button)`
      font-family: Courier New;
      border-color: tomato;
      color: tomato;
`

const Input = styled.input`
      padding: 0.5em;
      margin: 1.5em;
      color: ${props => props.inputColor || "palevioletred"};
      background: papayawhip;
      border: none;
      border-radius: 3px;
`

export  {Button, Title, ListItem, Input, Text}