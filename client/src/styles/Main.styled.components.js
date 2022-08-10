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
  height: 40em;
  position: absolute;
}
.containerBox {
  margin-bottom: 10px;
  margin-top: 10px;
}
`;

export const EntryView = styled.div`
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
  height: 40em;
  position: absolute;
}
.containerBox {
  margin-bottom: 10px;
  margin-top: 10px;
}
.containerRow {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
`;

export const TransactionView = styled.div`
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
  height: 40em;
  position: absolute;
}

.mapper {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  height: 900px;
  overflow-y: auto;
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

export const CancelButton = styled.button`

  background-color: #a33517;
  border: 1px solid #a33517;
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

export const Work = styled.div`

  background-color: #145e37;
  border: 1px solid #145e37;
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
  padding: 5px 10px;
  margin-bottom:10px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  padding: 5px 15px;

&:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
`;

export const FormBackground = styled.div`
top: 0;
left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

