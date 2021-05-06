const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body}
const posts = [
    {
        id: 1,
        title: 'api1',
        body:  '가짜 api1'
    },
    {
        id: 2,
        title: 'api2',
        body:  '가짜 api1'
    },
    {
        id: 3,
        title: 'api3',
        body:  '가짜 api1'
    },
    {
        id: 4,
        title: 'api4',
        body:  '가짜 api1'
    },

];

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id);
}