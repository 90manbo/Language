1. Javascript 언어소개

- 웹브라우저로 분류되는 소프트웨어를 프로그래밍적으로 제어하기 위한 언어.

```html
<input type="button" onclick="alert('hello world')" value="hello world" />
```

- 자바스크립트가 탈웹브라우저화 된다. 

  - 웹서버를 동작하기 위한 도구로 사용 (서버 사이드 스크립트)
  - Node.js

  ```
  웹서버 					  웹	   			웹브라우저
  	  					<--요청---
        					---응답-->
  (PHP, Java, Python..)					   
  (Node.js 웹서버를 제어하기 위한 기술의 자바스크립트)
  ```

  - 자바스크립트로 웹서버, 웹브라우저 모두를 제어할 수 있다.

  ```javascript
  var http=require('http')
  http.createServer(function(req, res){
  	res.writeHead(200, {'Content-Type' : 'text/plain'});
  	res.write('hello world\n');
  	res.end();
  }).listen(1337, '127.0.0.1');
  console.log('Server running at http://127.0.0.1:1337/')
  ```

- 탈웹

  - Goole Apps Script 

  ```javascript
  fuction onOpen(){
  	var name = Browser.msBox('hello world');
  };
  ```



