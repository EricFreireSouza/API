import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';

export default class Hot extends Component{
  state = {
    posts: [],
    loading: false,
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    // const limit = 10;
    const response = await api.get('/hot.json?limit=8');
    console.log(response);
    const post = await response.data.data.children;
    console.log(post);
    this.setState({ posts: post, loading: false });
  };

  loadMore = () => {
    this.setState({
      // posts: this.state.posts,
      loading: true,
    },
    this.loadPosts());
  };

  render(){
    const { posts } = this.state;

    return (
      <div className ="product-list">
        {posts.map((post, i) => (
          <article key={i}>
            <img className="thumbnail"
              alt="thumbnail"
              src={post.data.thumbnail}
            />
            <p><strong>{post.data.title}</strong></p>
            <p>enviado a {post.data.created} por <span>{post.data.author}</span></p>
            <p>{post.data.url}</p>
          </article>
        ))}
        <div className="action">
          <button onClick={() => this.loadMore()}>
            + Veja mais
          </button>
        </div>
        {this.state.loading ? <p>Loading...</p> : ""}
      </div>
    )
  }
}
