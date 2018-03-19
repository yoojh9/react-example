# 리액트로 만든 전화번호부 프로젝트

## 1. handling events
- 리액트 이벤트는 camelCase로 이름지어야 한다.
- html 방식과 가장 큰 차이점은 이벤트 전파를 막기 위해 html에서 return false를 전달하는 것과 달리
react에서는 반드시 preventDefault()를 호출해야 한다.
```  
// html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click Me
</a>
```  
<br/>

- JSX callback에서의 this는 조심해야 하는데, 자바스크립트에서 함수에는 this가 global 또는 window 객체이므로 원하는 결과를 얻기 어렵다. 때문에 생성자 함수에서 handle events에 this를 바인딩하는 작업이 필요하다
```
 class Togle extends React.Components{
   constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
   }

   handleClick(){
     // 클릭이벤트
   }
 }
```  
<br/>

- 이벤트는 컴포넌트에는 적용이 안되고, <div>나 <input>, <button>에만 적용됨. 때문에 Contact.js에서 <ContactInfo onClick={()=>{console.log('click')}}/> 과 같은 이벤트는 적용이 안된다.
- 위의 이벤트를 적용시키기 위해서, 이벤트는 컴포넌트에 props로 전달이 되므로 ContactInfo 컴포넌트에 먼저 적용시킨다.

<br/>

## 2. state 내부 배열 처리하기
- Array.push를 쓰게 되면 배열 자체를 변경시키므로, 만약 state의 내부 배열에 값을 추가하고 싶다면 concat을 사용한다.
- concat은 기존 배열은 그대로 두고 새로운 배열을 생성한다

```
this.setState({
  list: this.state.list.concat(newObj)
})
```
<br/>

- Immutability Helper: 다른 방법으로 객체나 배열을 더 쉽게 수정하게 해주는 immutable.js를 사용한다

```
  $ npm install --save react-addons-update  // 라이브러리 설치

  import update from 'react-addons-update'  // import한 update는 함수 형태

  // 컴포넌트에서 사용방법 (원소 추가)
  this.setState({
    list: update(
      this.state.list,
      {
        $push: [newObj, newObj2]
      }
    )
  })
```
