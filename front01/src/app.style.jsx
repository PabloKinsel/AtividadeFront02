import styled from 'styled-components';



export const Box = styled.div`
width: 400px;
height: 400px;
background: aliceblue;
border: 2px solid red;
border-radius: 10px;

p {
  color: purple ;
  font-size: 50px;
  font-weight: bold;
}

button{
  padding: 15px;
  border: 0;
  border-radius: 8px;
  background: #05da5e;
  cursor: pointer;
  color: white;

  &:hover{
  background: purple;
  color: #000;
} // O sentido de utilizar o & server para abreviar o Button exemplo button:hover{} funciona também so facilita a escrita do codigo

&:focus{
  border: 3px solid red;
}
}


`
