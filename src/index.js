import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.jsx';
import {Provider} from 'react-redux';
import './modules/util';

// 对react所有组件提供了一个onTouchTap()方法处理手机端的的点击事件
import store from './redux/store';


const render=()=>(
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  )
)

render();

// 手动订阅更新，将事件绑定到视图层
let unsubscribe=store.subscribe(render)

unsubscribe();
