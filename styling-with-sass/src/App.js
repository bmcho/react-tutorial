// import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
// import CheckBox from './components/CheckBox'
// import Button from './component/Button';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color};
//   border-radius: 50%;
//   ${props=> props.huge &&
//     `
//     width: 10rem;
//     height: 10rem;
//     `
//   }
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup =  styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
};



function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  }
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  }

  // const [check, setCheck] = useState(false);
  // const onChange = (e) => {
  //   setCheck(e.target.checked);
  // }
  return (
    <ThemeProvider theme={{palette}}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Button</Button>
          <Button color="gray">Button</Button>
          <Button color="pink" size="small">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>Button</Button>
          <Button color="gray" outline>Button</Button>
          <Button color="pink" size="small" outline>Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large"  fullWidth>Button</Button>
          <Button color="gray"  fullWidth>Button</Button>
          <Button color="pink" size="small" fullWidth>Button</Button>
        </ButtonGroup>

        <Button color="pink" size="large" onClick={onClick}>삭제</Button>

        <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" 
            onCancel={onCancel}
            onConfirm={onConfirm}
            visible={dialog}>
          데이터를 정말로 삭제하시겠습니까.
        </Dialog>
      </AppBlock>
    </ThemeProvider>
    // <>
    // <Circle color='blue' huge='true'/>
    // <Circle color='black'/>
    // </>
      // <div>
        // {<CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>}
      // </div>
  //  <div className="App">
  //    <div className="buttons">
  //     <Button size='large'>Button</Button>
  //     <Button>Button</Button>
  //     <Button size='smaall'>Button</Button>
  //    </div>
  //    <div className="buttons">
  //     <Button size='large' color='pink'>Button</Button>
  //     <Button color='pink'>Button</Button>
  //     <Button size='smaall' color='pink'>Button</Button>
  //    </div>
  //    <div className="buttons">
  //     <Button size='large' color='gray'>Button</Button>
  //     <Button color='gray'>Button</Button>
  //     <Button size='smaall' color='gray'>Button</Button>
  //    </div>
  //  </div>
  );
}

export default App;
