import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createStore } from 'redux';

// import reducers from './reducers/index'와 같은거임
import reducers from './reducers'
import { Provider } from 'react-redux';

//import * as actions from './actions';



// 스토어 생성. 스토어를 만들 때는 인수로 reducer를 전달한다.
const store = createStore(reducers);

console.log(store.getState());  // 현재 상태

// 상태 변화가 있을 때마다 특정 함수 실행
store.subscribe( () => console.log(store.getState()))

//store.dispatch(actions.increment());
//store.dispatch(actions.increment());
//store.dispatch(actions.decrement());


// 컴포넌트에서 redux store에 있는 데이터를 사용하여 변화를 주도록 할 수 있게 하려면 App 컴포넌트에 store를 props로 전달해서 
// getState()나 dispatch()를 해서 써야하는데, react에서 redux를 더 편하게 쓸 수 위한 방법이 있다.
// 바로 react-redux라는 뷰 레이어 바인딩 도구를 사용하는 것이다.
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
