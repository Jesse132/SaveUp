import styled from 'styled-components';

export const Main = styled.div`
body {
  align-items: center;
  position: fixed;
}
.container {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  height: 30em;
  position: absolute;
}
.containerBox {
  margin-bottom: 10px;
  margin-top: 10px;
}
`;

export const AccountView = styled.div`
body {
  align-items: center;
  position: fixed;
}
.container {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  height: 20em;
  position: absolute;
}
.containerBox {
  margin-bottom: 10px;
  margin-top: 10px;
}
`;

export const Button = styled.button`

  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  padding: 10px 30px;

&:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
`;