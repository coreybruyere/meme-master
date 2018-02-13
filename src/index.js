import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';
import SiteHeader from './components/SiteHeader';
import Routes from './routes';

import './index.css';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const App = () => (
  <div className='site-wrap'>
    <SiteHeader />

    <main className="site-main">
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </main>  
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
