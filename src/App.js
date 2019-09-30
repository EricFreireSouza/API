import React from 'react';
import Routes from './routes';
import Header from './components/header';
import Menu from './components/menu';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes />
    </div>
  );
};

export default App;
