import * as types from '../actions/ActionTypes';

// reducer의 초기 상태 설정
const initialState = {
  number: 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

// 함수 state가 undefined일 경우 initialState로 default
export default function counter(state = initalState, action){

  /* 액션에 따라서 반환 */

  switch(action.type) {
    case types.INCREMENT:
      // return { number : state.number + 1 }

      // ES6 spread 방식을 사용
      // 기존에 있던 state에 number를 stae.number+1 한 값으로 변경
      // state.dumbObject.u 값을 0으로 변경
      return {
          ...state,
          number: state.number + 1,
          dumbObject: { ...state.dumbObject, u: 0}
      };

    case types:DECREMENT:
      return {
        ...state, number: state.number - 1
      }

    default:
      return state;
  }

}
