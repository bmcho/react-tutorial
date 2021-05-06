import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener norefe rrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// import React, { useRef, useState, useMeno, useCallback, useReducer } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.fiter(user => user.active).length;
// }

// const initalState ={
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
//     {
//       id :1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id :2,
//       username: 'user2',
//       email: 'user2@gmail.com',
//       active: fasle
//     },
//     {
//       id :3,
//       username: 'user3',
//       email: 'user3@gmail.com',
//       active: false
//     }
//   ]
// }

// function reducer(state, action){
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inpusts,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//       return {
//         inpusts: initalState.inputs,
//         users: state.users.concat(action.user)
//       };
//     case 'TOGGLE_USER': 
//       return {
//         ...state,
//         users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
//       };
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       }
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = userReducer(reducer, initalState);
//   const nextId = useRef(4);
//   const { users } = state;
//   const { username, email } = state.inpusts;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch( {
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     })
//   })

//   const onCreate = useCallback(e => {
//     dispatch( {
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     })
//     nextId.current += 1;
//   }, [username, email])

//   const onToggle = useCallback(e => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     })
//   }, [])

//   const onRemove = useCallback(e => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     })
//   }, [])

//   const count = userMeno(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
//       <UserList users={users} onToggle={onToggle} onREmove={onRemove} />
//       <div>활성 사용자 수: {count}</div>
//     </>
//   )
// }

export default App;
