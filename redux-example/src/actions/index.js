
// 액션 생성자 명칭을 index.js로 한 이유는 actions/ 디렉토리만 불러왔을 때 자동을 이 파일이 로드되도록 하기 위해

// import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes'
import * as types from './ActionTypes';

// Action 생성자 생성. 다른 곳에서 불러올 수 있도록 액션 생성자 또한 export 시킨다.
export function increment(){
  return {
    type: types.INCREMENT
  };
}

export function decrement(){
  return {
    type: types.DECREMENT
  };
}

export function setColor(color){
  return {
    type: types.SET_COLOR,
    color // color: color와 동일한 의미
  };
}
