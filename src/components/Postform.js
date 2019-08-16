import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions.js';

class Postform extends Component {
 constructor(props) {
  super(props);
   this.state = {
    title: '',
    body: ''
  };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.setState({[e.target.name]: e.target.value });
}

onSubmit(e) {
    e.preventDefault();

    const post = {
        title: this.state.title,
        body: this.state.body
    }
this.props.createPost(post);
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     //when making a post must have a second parameter for correct syntax
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));
}
    render() {
        return (
            <div>
               <h1>Add Post </h1> 
               <form onSubmit={this.onSubmit}>
                <div>
                 <label>Title: </label><br />
                 <input type='text' name="title" onChange={this.onChange}
                  value={this.state.title} />
                </div>
                <br />
                <div>
                 <label>Body: </label><br />
                 <textarea type='body' name="body" onChange={this.onChange} 
                 value={this.state.body}/>
                </div>
                <br />
                 <button type="submit">SUBMIT</button>
               </form>
            </div>
        )
    }
}

//need to be added as a proptype and call out and what type of datastructure is it
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

//this is the connection to the redux store  
export default connect(null, { createPost })(Postform);