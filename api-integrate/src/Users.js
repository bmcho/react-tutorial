import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
// import useAsync from './useAsync';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

// async function getUsers() {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
//     return response.data;
// }

// 2
// //Loading, Success, Error
// function reducer(state, action) {
//     switch(action.type) {
//         case 'LOADING':
//             return {
//                 loading: true,
//                 data: null,
//                 error: null
//             }
//         case 'SUCCESS':
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null
//             }
//         case 'ERROR':
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error
//             }
//         default:
//             throw new Error(`unhandled action type: ${action.type}`);
//     }
// }


function Users() {

    

    // 2
    // const [state, dispatch] = useReducer(reducer, {
    //     loading: false,
    //     data: null,
    //     error: null
    // });
    // 2
    // const fetchUsers = async () => {
    //     dispatch({
    //         type: 'LOADING'
    //     });
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    //         dispatch({
    //             type: 'SUCCESS', data: response.data
    //         });

    //     } catch (error) {
    //         dispatch({
    //             type: 'ERROR',
    //             error: error
    //         });
    //     }
    // };

    // 1
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 1
    const fetchUsers = async () => {
        try {
            setUsers(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');

            setUsers(response.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);        
    }

    // 1
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             setUsers(null);
    //             setError(null);
    //             setLoading(true);
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/users/');

    //             setUsers(response.data);
    //         } catch (error) {
    //             setError(error);
    //         }
    //         setLoading(false);        
    //     }
    //     fetchUsers();
    // }, []);

    // 2
    useEffect(() => {
        fetchUsers();
    }, [])

    // 3
    // const [state, refetch] = useAsync(getUsers, [], true);
    // const { loading, data: users, error } = state;

    // const [userId, setUserId] = useState(null);
    // const state = useUsersState();
    // const dispatch = useUsersDispatch();

    // const { data: users, loading, error } = state.users;
    // const fetchData = () => {
    //     getUsers(dispatch);
    // };
    
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <button onClick={fetchUsers}>불러오기</button>;

    
    return (
        <>
          <ul>
            {users.map(user => (
              <li
                key={user.id}
                // onClick={() => setUserId(user.id)}
                style={{ cursor: 'pointer' }}
              >
                {user.username} ({user.name})
              </li>
            ))}
          </ul>
          <button onClick={fetchUsers}>다시 불러오기</button>
          {/* {userId && <User id={userId} />} */}
        </>
    );
}

export default Users;