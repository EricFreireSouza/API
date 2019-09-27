import React, { Component } from "react";
// import api from "../../services/api";
// import {Link} from 'react-router-dom';
// import './styles.css';
import List from '../../components/list';
import Navigation from '../../components/menu';

export default class Main extends Component{
  // state = {
  //   products: [],
  //   productInfo: {},
  //   page: 1,
  // }

  constructor(props){
    super(props);
    this.state = {
      activeNavigationUrl: "",
      navigationItems: [],
      storyItems: [],
      title: "Please select a sub"
    };
  }

  // componentDidMount(){
  //   this.loadProducts();
  // }

  componentDidMount() {
    var _this = this;
    var cbname = "fn" + Date.now();
    var script = document.createElement("script");
    script.src = `https://www.reddit.com/reddits.json?jsonp=${cbname}`;
    console.log("URL 1: ",script.src);

    window[cbname] = (jsonData) => {
      _this.setState({
          navigationItems: jsonData.data.children
      });
      delete window[cbname];
    };

    document.head.appendChild(script);
  }

  setSelectedItem = (item) => {
    var _this = this;
    var cbname = "fn" + Date.now();
    var script = document.createElement("script");
    script.src = `https://www.reddit.com${item.data.url}.json?sort=top&t=month&jsonp=${cbname}`;
    console.log("URL 2: ",script.src);

    window[cbname] = (jsonData) => {
      _this.setState({storyItems: jsonData.data.children});
      delete window[cbname];
    };

    document.head.appendChild(script);

    this.setState({
      activeNavigationUrl: item.data.url,
      title: item.data.display_name
    });
  };

  // loadProducts = async (page = 1) => {
  //   const response = await api.get(`/products?page=${page}`);
  //   const {docs, ...productInfo} = response.data;
  //   this.setState({ products: docs, productInfo, page });
  // };

  // nextPage = () => {
  //   const {page,productInfo} = this.state;
  //   if(page === productInfo.pages) return;
  //   const pageNumber = page + 1;
  //   this.loadProducts(pageNumber);
  // }

  render(){
    // const {products, page, productInfo } = this.state;

    return (
      <div>
        <Navigation
          activeUrl={this.state.activeNavigationUrl}
          items={this.state.navigationItems}
          itemSelected={this.setSelectedItem}
        />
        <List items={this.state.storyItems} />
      </div>
      // <div className ="product-list">
      //   {products.map(product => (
      //     <article key={product._id}>
      //       <strong>{product.title}</strong>
      //       <p>{product.description}</p>
      //       <Link to={`/products/${product._id}`}>Acessar</Link>
      //     </article>
      //   ))}
      //   <div className="action">
      //     <button disabled={page === productInfo.pages} onClick={this.nextPage}>
      //       + Veja mais
      //     </button>
      //   </div>
      // </div>
    )
  }
}
