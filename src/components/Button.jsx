import styled from 'styled-components';


const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.1rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.3rem;
margin: 0.2rem 0.5rem;
transition: all ease-in-out;
&:hover {
  background:  var(--lightBlue);
  color: var(--mainBlue);
}
&:focus {
  aoutline:none;
}
`

export default ButtonContainer;