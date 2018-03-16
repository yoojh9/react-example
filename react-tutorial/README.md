# 리액트 튜토리얼

----

- npm install : dependency 설치
- npm start (dev-server) : 개발 서버 실행

## 1. Global 패키지 설치
- babel: ES6를 ES5 코드로 변환해줌
- webpack: 브라우저 위에서 import(require)을 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐줌
- webpack-dev-server: 간단한 개발 서버로 static 페이지 서버. hot-loader를 통하여 코드가 수정될 때 마다 자동으로 리로드 되게 할 수 있다
```
$ npm install -g babel webpack webpack-dev-server
```

<br/>
## 2. node.js 프로젝트 생성
$ npm init

<br/>

## 3. dependency 및 플러그인 설치
- \-save 옵션을 통하여 package.json에 패키지 추가  

```
$ npm install --save react react-dom
```  

<br/>

- babel에서 사용될 플러그인 추가. 해당 모듈은 개발 환경에서만 사용되므로 \-save\-dev 옵션을 설정.

```
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
```
<br/>

## 4 프로젝트 실행
- $ npm start dev-server로 프로젝트를 실행하기 위해 package.json에 다음과 같이 추가한다  

```
"scripts":{
  "dev-server": "webpack-dev-server"
}
```

---
#### 참고
[velopert님 블로그, 작업환경 설정하기](https://velopert.com/814) <br/>
