import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import swagLogo from './img/meme-lord-logo.svg';
import './index.css';
// import 'antd/dist/antd.css';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)
// class App extends Component {
//   render() {
//     return (
//       <div className="bg-black">
//         <header className="">
//           <img src={logo} className="block w-48 mx-auto" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//           <button className="btn btn--orange">hi fdafsfdsafs</button>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
