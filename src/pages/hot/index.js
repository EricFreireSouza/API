import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';

export default class Hot extends Component{
  state = {
    posts: [],
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async (item) => {
    const limit = 10;
    const response = await api.get(`/hot.json?${limit}`);
    console.log(response);
    const post = await response.data;
    console.log(post);
    this.setState({ posts: post });

    // await api.get(`/hot.json?${limit}`).then(res => {
    //   console.log('Res: ', res);
    //   this.setState({ posts: res.data.data.data.children });
    // }).catch(e => {
    //   console.log('Erro: ', e);
    // });
  };

  render(){
    const { posts } = this.state;

    return (
      <div className ="product-list">
        <p>Teste</p>
        {posts.map(post => (
          <article key={post.id}>
            <strong>{post.title}</strong>
            <p>{posts.description}</p>
          </article>
        ))}
      </div>
    )
  }
}
