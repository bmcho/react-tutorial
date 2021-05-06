import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { clearPost, getPost, goToHome } from '../modules/posts';

function PostContainer( { postId }) {
    const { data, loading, error } = useSelector(state => { return state.posts.post[postId] || {};});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(postId));
        // return () => {
        //     dispatch(clearPost());
        // }
    },[postId, dispatch]);
    
    if(loading && !data) return <div>로딩중..</div>
    if(error) return <div>에러!</div>
    if(!data) return null;

    return (
        <>
        <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
        <Post post={data} />
        </>
    );
}

export default PostContainer;