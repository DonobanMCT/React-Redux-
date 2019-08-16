import { FETCH_POSTS, NEW_POST } from './types.js';

// export function fectPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => 
//             dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }));
//     }
// }
//each action that we create must be a pure function 
//dispatch is a like a promise for send data to threw the type and payload
//

//same function as the top one only in ES6 syntax
export const fetchPosts = () => dispatch => {
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
     );
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        //when making a post must have a second parameter for correct syntax
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST, 
        payload: post 
    }));
};

