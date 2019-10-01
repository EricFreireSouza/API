import React, { Component } from "react";
import api from "../../services/api";
import '../styles.css';

export default class Rising extends Component{
  state = {
    posts: [],
    loading: false,
    limit: 8,
    total: 16,
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    // if (this.state.limit > this.state.total) { return ; }
    const response = await api.get(`/rising.json?limit=${this.state.limit}`);
    const post = await response.data.data.children;
    this.setState({ posts: post, loading: false, limit: (this.state.limit * 2), total: post.length });
  };

  loadMore = () => {
    this.setState({ loading: true })
    this.loadPosts();
  };

  render(){
    const { posts } = this.state;

    return (
      <div className ="product-list">
        {posts.map((post, i) => (
          <article key={i}>
            <a href={post.data.url}>
              <img className="thumbnail"
                alt="Thumb"
                src={post.data.thumbnail}
              />
              <aside className="description">
                <p className="title">{post.data.title}</p>
                <p className="created"><span>enviado a {post.data.created}</span> por <span>{post.data.author}</span></p>
                <p className="link">{post.data.url}</p>
              </aside>
            </a>
          </article>
        ))}
        <div className="action">
          <button onClick={() => this.loadMore()}>
            + Veja mais
          </button>
        </div>
        {this.state.loading ? <p><strong>Loading...</strong></p> : ""}
      </div>
    )
  }
}
