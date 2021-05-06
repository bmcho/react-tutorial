import * as postAPI from '../api/posts';
import { 
    reducerUtils, 
    createPromiseThunk, 
    handleAsyncActions, 
    createPromiseThunkById, 
    handleAsyncActionsById,
    createPrimiseSaga,
    createPrimiseSagaById
} from '../lib/asyncUtils';
import { call, put, takeEvery, takeLatest, getContext } from 'redux-saga/effects';

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_EEROR = 'posts/GET_POSTS_EEROR';

const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

const CLEAR_POST = 'posts/CLEAR_POST';
const GO_TO_HOME = 'GO_TO_HOME';

// export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);
// export const getPost = id => async dispatch => {
//     dispatch({ type:GET_POST, meta:id});
//     try {
//         const payload = await postAPI.getPostById(id);
//         dispatch({type: GET_POST_SUCCESS, payload, meta:id});
//     } catch (e) {
//         dispatch({type: GET_POST_ERROR, payload: e, error: true, meta:id});
//     }
// }
// export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostById);
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload:id, meta:id });

// function* getPostsSaga() {
    
//     try {
//         const posts = yield call(postAPI.getPosts);
//         yield put( {
//             type: GET_POSTS_SUCCESS,
//             payload:posts
//         });
//     } catch (error) {
//         yield put( {
//             type: GET_POSTS_SUCCESS,
//             payload:error,
//             error: true
//         });
//     }
// }

// function* getPostSaga(action) {
//     const id = action.payload;
//     try {
//         const post = yield call(postAPI.getPostById, id);
//         yield put( {
//             type: GET_POST_SUCCESS,
//             payload:post,
//             meta: id
//         });
//     } catch (error) {
//         yield put( {
//             type: GET_POST_SUCCESS,
//             payload:error,
//             error: true,
//             meta: id
//         });
//     }
// }

const getPostsSaga = createPrimiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPrimiseSagaById(GET_POST, postAPI.getPostById);
function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');
}

export function* postSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

// export const goToHome = () => (dispatch, getState, {history}) => {
//     history.push('/');
// }
export const goToHome = () => ({type: GO_TO_HOME});
export const clearPost = () => ({type:CLEAR_POST});

// export const getPosts = () => async (dispatch) => {
//      //요청이 시작됨
//     dispatch({type: GET_POSTS});
//     try {
//         //API를 호출
//         const posts = await postAPI.getPosts();
//         //성공
//         dispatch({
//             type: GET_POSTS_SUCCESS,
//             posts
//         });
//     } catch (error) {
//         //에러
//         dispatch({
//             type: GET_POSTS_EEROR,
//             error
//         });
//     }
// };

// export const getPost = (id) => async (dispatch) => {
//     //요청이 시작됨
//    dispatch({type: GET_POST});
//    try {
//        //API를 호출
//        const post = await postAPI.getPostById(id);
//        //성공
//        dispatch({
//            type: GET_POST_SUCCESS,
//            post
//        });
//    } catch (error) {
//        //에러
//        dispatch({
//            type: GET_POST_ERROR,
//            error
//        });
//    }
// };

const initialState = {
    posts: reducerUtils.initial(),
    // post: reducerUtils.initial()
    post:{}
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
// const getPostReducer = handleAsyncActions(GET_POST, 'post');
// const getPostReducer = (state, action) => {
//     const id = action.meta;
//     console.log("Reducer");
//     console.log(state.post);
//     switch (action.type){
//         case GET_POST:
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: reducerUtils.loading(state.post[id] && state.post[id].data)
//                 }
//             };
//         case GET_POST_SUCCESS:
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: reducerUtils.success(action.payload)
//                 }
//             };
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 post: {
//                     ...state.post,
//                     [id]: reducerUtils.error(action.payload)
//                 }
//             };
//         default:
//             return state;
//     }
// }
const getPostReducer = handleAsyncActionsById(GET_POST,'post', true);

export default function posts(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS :
        case GET_POSTS_SUCCESS :
        case GET_POSTS_EEROR :
            return getPostsReducer(state, action);
        case GET_POST :
        case GET_POST_SUCCESS :
        case GET_POST_ERROR :
            return getPostReducer(state, action);
        case CLEAR_POST :
            return  {
                ...state,
                post: reducerUtils.initial()
            }
        default:
            return state;
    }
}