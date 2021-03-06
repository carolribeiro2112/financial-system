import styled from 'styled-components';

export const Aside = styled.div`
  height: 100vh;
  width: 15vw;
  
  display: flex;
  flex-direction:column;
  align-items: stretch;
  background-color: #312E38;

  font-size: 24px;

  div{
    margin-top: 40px;
    margin-left: 20px;
    a{
      display: block;
      margin-bottom: 8px;
      color: #FFFFFF;
      text-decoration: none;
    }
  }
`;