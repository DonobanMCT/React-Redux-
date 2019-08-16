import React, { Component } from 'react';
//this connects your react components to your redux store 
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions.js';
import PropTypes from 'prop-types';

class Posts extends Component {
    componentWillMount() {
        //this line call the action to be evaluated 
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }
    // componentDidMount() {
    //    fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState({ posts: data}));
    // }
    render() {
        //this is where we are using the state from the redux store 
        //that got converted to properties using the funstion mapStateToProps 
        const postItems = this.props.posts.map(post => (
            //when mapping threw any object they must have a unique key 
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>  
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object

}

//now we are going to use the mapStateToProps to get the state from redux 
//and map to the properties of the react components to use it here
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

//this is where connect come in to play 
//and make store work with react components and make the state avaible to use 
//in components as properties instead of state 
export default connect(mapStateToProps, { fetchPosts })(Posts);