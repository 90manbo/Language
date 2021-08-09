# async vs defer

##### HTML에서 JS를 포함할 때 어떤 방식이 있는지 알아보자.

1. head 안에 script 태그를 작성한다면

```
parsing HTML ==> blocked                  ==> parsing HTML
                 fetching js, executing js  			  page is ready
```

- 브라우저가 HTML을 한 줄씩 분석(parsing)하여 css와 병합하여 DOM 요소로 변환하게 된다. 

- script 태그를 만나게 된다면, HTML 파싱을 멈추고 경로의 자바 스크립트 파일을 먼저 다운 받는다. 
- 다운이 완료되고 난 후 멈추었던 파싱을 끝낸다.

- 자바스크립트 파일의 용량이 크고 인터넷이 느리다면 다운로드에 시간이 오래걸려서 페이지 로딩 시간이 길어진다.



2. body 안의 맨 끝에 script 태그를 작성한다면

```
parsing HTML             ==> fetching js ==> executing js
			page is ready
```

- 파싱이 모두 끝난 후 script태그 경로의 자바 스크립트 파일을 fetching(서버에서 받아옴)하고 실행 한다.
- 사용자가 기본적인 HTML 컨텐츠를 빨리 볼 수 있지만, 만약 웹사이트가 자바스크립트에 매우 의존적이라면, 사용자가 정상적인 페이지를 보기까지 오래 걸린다.



3. head에서 script 태그를 이용하면서 async 속성을 사용한다면

```
parsing HTML ==> blocked     ==> parsing HTML
 fetching js     executing js   			 page is ready
```

- HTML 파싱 중 script 태그를 만나게 되면, 병렬로 경로의 자바 스크립트 파일을 다운 받는다.
- 자바 스크립트 파일의 패칭이 끝나면 파싱을 멈추고, 자바 스크립트 파일을 실행 한다.
- 그 후 나머지 HTML을 파싱한다.
- 다운로드 받는 시간을 절약할 수 있다. 하지만 자바 스크립트가  HTML 파싱이 끝나기 전에 실행되기 때문에, a만약 자바 스크립트 파일에서 쿼리셀렉트문으로 DOM 요소를 조작한다고 하면, 조작하려는 시점에 HTML이 아직 정의되어 있지 않을 수 있다. 
- HTML 파싱하는 동안, 자바스크립트 실행을 위해 멈출 수 있기 때문에 사용자가 페이지를 보는데 시간이 걸릴 수 있다.

```
<script async src="a.js"></srcipt>
<script async src="b.js"></srcipt>
<script async src="c.js"></srcipt>
```

```
parsing HTML ==> blocked blocked    blocked	==> parsing HTML
 fet a.js----------------ex js
 fet b.js--------ex js  									    page is ready
 fet c.js---------------------------ex js
```





4. head에서 script 태그를 이용하면서 defer 속성을 사용한다면

```
parsing HTML              ==> executing js
 fetching js page is ready
```

- HTML 파싱 중 script 태그를 만나게 되면, 병렬로 경로의 자바 스크립트 파일을 다운 받는다.
- 파싱이 끝난 후 다운로드 되어진 자바스크립트 파일을 실행한다.

```
<script defer src="a.js"></srcipt>
<script defer src="b.js"></srcipt>
<script defer src="c.js"></srcipt>
```

```
parsing HTML ============================(page is ready)===> executing a.js b.js c.js
 fet a.js----------------ex js
 fet b.js--------ex js  									    
 fet c.js---------------------------ex js 
```

