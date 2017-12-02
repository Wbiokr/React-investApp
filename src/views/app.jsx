import React from 'react';
import Header from '../';
import Routes from '../route/router';


export default class App extends React.Component{
  render(){
    return <div className="wraper">
              <Header />
              <main>
                <Routes />
              </main>
          </div>
  }
}