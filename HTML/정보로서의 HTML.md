정보로서의 HTML

1. font 태그 - 쓰지마라!

- 퇴출 된 대표적인 태그 중 하나이다.

```html
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	<font size="8" color="red">Hello</font>world
</body>
</html>
```

- 3이 기본 값이고, 7이 최대이다. 1~7의 숫자.

- li, ol등은 어떠한 의미를 가지고 있다. 하지만 font는 시각적인 디자인일 뿐이지 위의 Hello에 대한 어떠한 정보도 가지고 있지 않다.
- css라 불리는 별도의 프로그래밍 언어로 디자인을 담당한다. 



2. Meta 태그

- 어떠한 데이터를 설명하는 태그. 웹페이지 전체를 설명하는 정보를 담는다. 

```html
<meta charset="utf-8"> <!-- 인코딩 내용 --> 
<meta name="description" content="코딩자료"> <!-- 웹페이지의 요약된 내용-->
<meta name="keywords" content="코딩, coding, html"> <!-- 웹페이지를 설명하는 키워드 -->
<meta name="author" content="park"> <!-- 저자 -->
<meta http-equiv="refresh" content="30"> <!-- 30초 간격으로 새로고침 -->
```



3. semantic - 의미론적인 태그

| 태그    | 의미                                                         |
| ------- | ------------------------------------------------------------ |
| article | 본문                                                         |
| aside   | 광고와 같이 페이지의 내용과는 관계가 적은 내용들             |
| details | 사용자가 직접 조작하여 보거나 숨길 수 있는 부가적인 세부사항을 명시 |
| figure  | 삽화, 다이어그램등 부가적인 요소를 정의                      |
| footer  | 화면의 하단에 위치하는 사이트나 문서의 전체적인 정보를 정의  |
| header  | 화면의 상단에 위치하는 사이트나 문서의 전체적인 정보를 정의  |
| main    | 문서에서 가장 중심이 되는 컨텐츠를 정의                      |
| mark    | 참조나 하이라이트 표시를 필요로 하는 문자를 정의             |
| nav     | 문서의 네비게이션 항목을 정의                                |
| section | 문서의 구획들을 정의                                         |
| time    | 시간 정의                                                    |

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
	<header>
		<h1><a href="index.html">HTML</a></h1>
	</header>
	<nav>
		<ol>
  			<li><a href="1.html">기술소개</a></li>
  			<li><a href="2.html">기본문법</a></li>
 			<li><a href="3.html">하이퍼텍스트와 속성</a></li>
  			<li><a href="4.html">리스트와 태그의 중첩</a></li>
		</ol>
	</nav>
	<section>
		<article>
			<h2> 도움되는 분들</h2>
			아무나
			웹페이지를 원하는대로 꾸미고 싶은 블로거
			웹개발 입문을 원하시는 분
			HTML 개념을 확실히 잡고싶은 분

			<h2>선행강좌</h2>
			없어요.
			앞서 전반적인 웹개발의 흐름을 알고 싶으시다면, 웹어플리케이션 만들기 를 들어보세요.
		</article>
		<article>
			<h2> 도움되는 분들</h2>
			아무나
			웹페이지를 원하는대로 꾸미고 싶은 블로거
			웹개발 입문을 원하시는 분
			HTML 개념을 확실히 잡고싶은 분

			<h2>선행강좌</h2>
			없어요.
			앞서 전반적인 웹개발의 흐름을 알고 싶으시다면, 웹어플리케이션 만들기 를 들어보세요.
		</article>
	</section>
	<footer>
		<a href="privacy.html">개인보호정책</a>
		<a href="about.html">회사소개</a>
	</footer>

</body>
</html> 
```



4. 모바일

- 크롬브라우저에서 개발자 도구 활용하자.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```



5. HTML5의 새로운 제출 양식

- input 타입

```html
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8"></head>
	<body>
		<form action="form.php">
			<input type="number" min="10" max="15"> <!-- 숫자만 입력가능 min, max 가능-->
			<input type="submit">
		</form>
	</body>
</html>
```

- type의 값을 number로 주면 숫자만 입력 가능해진다. 
- 제출 버튼을 눌렀을 때, min, max 범위를 벗어나면 다시 입력하라고 뜬다.

```html
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8"></head>
	<body>
		<form action="form.php">
			<input type="number" name="age" min="10" max="15"> <!-- 숫자만 입력가능 min, max 가능-->
			<input type="date" name="datevalue"> <!-- 달력 -->
			<input type="month" name="monthvalue"> <!-- 월 까지 -->
			<input type="week" name="weekvalue"> <!-- 주 -->
			<input type="time" name="timev"> <!-- 시간 -->
			<input type="email" name="emailv">
			<input type="search" name="searchv">
			<input type="tel" name="telv"> 
			<input type="url" name="urlv">
			<input type="range" name="rangev" min="0" max="10">
			<input type="submit">
		</form>
	</body>
</html>
```



6. form과 관련된 추가 된 속성

```html
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8"></head>
	<body>
		<form action="form.php" autocomplete="on">
			<input type="text" name="id" placeholder="ID" autofocus>
			<input type="password" name="password" placeholder="PWD" autocomplete="off"> <!-- 여기만 비활성화 -->
			<input type="submit">
		</form>
	</body>
</html>
```

- autocomplete : 자동완성 기능

- placeholder : input 란에 뭐 써야 할지 알려줌.
- autofocus : 마우스 커서 자동으로 잡아줌.



```html
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8"></head>
	<body>
		<form action="register.php">
			<input type="text" name="id" placeholder="아이디 입력" required pattern="[a-zA-Z].+[0-9]">
			<input type="email" name="email" placeholder="이메일 입력">
			<input type="submit">
		</form>
	</body>
</html>
```

- required : 필수 입력. 안쓰면 입력해도 되고 안해도 되고.

- pattern : 정규표현식을 사용해서 입력 패턴을 잡아줌. 

  ex) [a-zA-Z].+[0-9] 첫번째 글자는 알파벳 그 다음 문자는 아무거나 와도 상관없다. 상관없는 것을 점으로 표현함. 하나이상은 +로 표현. 맨마지막은 반드시 숫자로 끝나야 한다.

- 입력한 정보를 받는 서버에서 엄격한 기준으로 데이터를 받아야한다. HTML에서의 입력 값 체크는 사용자의 편의를 위해서 정도로만 사용하자.