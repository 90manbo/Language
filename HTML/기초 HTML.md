HTML (Hyper Text Markup Language)

- Hyper Text : 하이퍼텍스트를 가장 중요한 특징으로 하는

```wiki
사용자에게 내용의 비순차적 검색이 가능하도록 제공되는 텍스트. 문서 내의 특정한 단어가 다른 단어나 데이터베이스와 링크되어 있어 사용자가 관련 문서를 넘나들며 원하는 정보를 얻을 수 있음. 전자 사전·멀티미디어 데이터베이스·문장 작성 시스템 등에 응용됨.
```

- Markup : 마크업이라는 형식을 가진

```wiki
마크업 언어(markup 言語, markup language)는 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지이다. 태그는 원래 텍스트와는 별도로 원고의 교정부호와 주석을 표현하기 위한 것이었으나 용도가 점차 확장되어 문서의 구조를 표현하는 역할을 하게 되었다.
```

- Language : 컴퓨터 프로그래밍 언어

- 웹브라우저에 표시되는 웹페이지를 만들어달라고 컴퓨터에 요청하는 언어.
- 사람과 웹브라우저 사이의 약속.



1.  여러가지 기본 태그

```html
<h1>오늘의 명언</h1>
우리 모두는 <strong>자신의 힘</strong>으로 발견한 내용을 가장 쉽게 익힌다. 
```

- strong : 강조해서 굵은 글자로 표시.
- h1 ~ h6 : heading의 약자. 제목 및 줄바꿈





```html
<!-- 중첩이 가능한 태그-->
<ol>
  <li>기술소개</li>
  <li>기본문법</li>
  <li>하이퍼텍스트와 속성</li>
  <li>리스트와 태그의 중첩</li>
</ol>
<ul>
  <li>김김김</li>
  <li>박박박</li>
  <li>장장장</li>
  <li>하하하</li>
</ul>
```

- li : 목록으로 표현함.
- ol : ordered list. 그룹핑해서 숫자가 붙음.
- ul : unordered list. 그룹핑해서 숫자가 안붙음.





```html
<!-- 문서의 구조 -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1>HTML</h1>
<ol>
  <li>기술소개</li>
  <li>기본문법</li>
  <li>하이퍼텍스트와 속성</li>
  <li>리스트와 태그의 중첩</li>
</ol>

<h2> 도움되는 분들</h2>
아무나
웹페이지를 원하는대로 꾸미고 싶은 블로거
웹개발 입문을 원하시는 분
HTML 개념을 확실히 잡고싶은 분

<h2>선행강좌</h2>
없어요.
앞서 전반적인 웹개발의 흐름을 알고 싶으시다면, 웹어플리케이션 만들기 를 들어보세요.
</body>
</html> 

```

- title : 웹 브라우저의 텝에 제목으로 표시.
- meta :  인코딩을 알려주는 태그.
- head : 문서를 꾸며주는 역할. 문서의 부가적인 정보
- body : 문서의 본문.
- html : head, body 태그를 모두 감싸는 태그.

- !DOCTYPE html : Document type declaration. 브라우저에게 어떠한 표준에 따라서 문서를 작성했는지 알려주는 태그.





```html
<!-- 간단한 웹사이트 index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">HTML</a></h1>
<ol>
  <li><a href="1.html">기술소개</a></li>
  <li><a href="2.html">기본문법</a></li>
  <li><a href="3.html">하이퍼텍스트와 속성</a></li>
  <li><a href="4.html">리스트와 태그의 중첩</a></li>
</ol>

<h2> 도움되는 분들</h2>
아무나
웹페이지를 원하는대로 꾸미고 싶은 블로거
웹개발 입문을 원하시는 분
HTML 개념을 확실히 잡고싶은 분

<h2>선행강좌</h2>
없어요.
앞서 전반적인 웹개발의 흐름을 알고 싶으시다면, 웹어플리케이션 만들기 를 들어보세요.
</body>
</html> 

```

```html
<!-- 1.html -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">HTML</a></h1>
<ol>
  <li><a href="1.html">기술소개</a></li>
  <li><a href="2.html">기본문법</a></li>
  <li><a href="3.html">하이퍼텍스트와 속성</a></li>
  <li><a href="4.html">리스트와 태그의 중첩</a></li>
</ol>

<h2>기술소개</h2>
HTML은 HyperText Markup Language의 약자로서 웹페이지를 만드는 언어입니다.
</body>
```

```html
<!-- 2.html -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">HTML</a></h1>
<ol>
  <li><a href="1.html">기술소개</a></li>
  <li><a href="2.html">기본문법</a></li>
  <li><a href="3.html">하이퍼텍스트와 속성</a></li>
  <li><a href="4.html">리스트와 태그의 중첩</a></li>
</ol>

<h2>기본문법</h2>
태그를 사용합니다.
</body>
```

```html
<!-- 3.html -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">HTML</a></h1>
<ol>
  <li><a href="1.html">기술소개</a></li>
  <li><a href="2.html">기본문법</a></li>
  <li><a href="3.html">하이퍼텍스트와 속성</a></li>
  <li><a href="4.html">리스트와 태그의 중첩</a></li>
</ol>

<h2>하이퍼텍스트와 속성</h2>
a를 사용합니다.
</body>
```

```html
<!-- 4.html -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>

<body>
<h1><a href="index.html">HTML</a></h1>
<ol>
  <li><a href="1.html">기술소개</a></li>
  <li><a href="2.html">기본문법</a></li>
  <li><a href="3.html">하이퍼텍스트와 속성</a></li>
  <li><a href="4.html">리스트와 태그의 중첩</a></li>
</ol>

<h2>리스트와 태그의 중첩</h2>
리스트는 li를 쓰고, ul이나 ol로 감싸서 사용합니다.
</body>
```

- 링크를 통해 페이지들간 이동할 수 있다.





```html
<!-- p -->
<html>

<body>
  <p>
    HTML은 하이퍼텍스트 마크업 언어(HyperText Markup Language, 문화어: 초본문표식달기언어,
    하이퍼본문표식달기언어)라는 의미의 웹 페이지를 위한 지배적인 마크업 언어다.
    HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크,
    인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객
    체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다.
  </p>
  <br><br>
  <p>
    HTML은 웹 페이지 콘텐츠 안의 꺾쇠
    괄호에 둘러싸인 "태그"로 되어있는 HTML 요소 형태로 작성한다. HTML은 웹 브라우저와 같은 HTML
    처리 장치의 행동에 영향을 주는 자바스크립트와 본문과 그 밖의 항목의 외관과 배치를 정의하는
    CSS 같은 스크립트를 포함하거나 불러올 수 있다.HTML과 CSS 표준의 공동 책임자인 W3C는 명확하고
    표상적인 마크업을 위하여 CSS의 사용을 권장한다.[1]
  </p>
</body>

</html>
```

- p : paragraph. 단락을 표시하는 태그.





```html
<!-- br -->
<html>

<body>
  HTML은 하이퍼텍스트 마크업 언어(HyperText Markup Language, 문화어: 초본문표식달기언어,
  하이퍼본문표식달기언어)라는 의미의 웹 페이지를 위한 지배적인 마크업 언어다.
  HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크,
  인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 그리고 이미지와 객
  체를 내장하고 대화형 양식을 생성하는 데 사용될 수 있다.<br>
  HTML은 웹 페이지 콘텐츠 안의 꺾쇠 괄호에 둘러싸인 "태그"로 되어있는 HTML 요소 형태로 작성한다.
  HTML은 웹 브라우저와 같은 HTML처리 장치의 행동에 영향을 주는 자바스크립트와 본문과 그 밖의 항목의
  외관과 배치를 정의하는CSS 같은 스크립트를 포함하거나 불러올 수 있다.HTML과 CSS 표준의 공동 책임자인
  W3C는 명확하고 표상적인 마크업을 위하여 CSS의 사용을 권장한다.[1]
</body>

</html>
```

- br : A forced line-break. 줄바꿈 태그. br태그는 내용이 없는태그. (empty element or void element)





```html
<!-- image -->
<html>

<body>
  <img src="mountain.jpg" height="300" alt="산 이미지" title="산 이미지">
</body>

</html>
```

- img : 이미지 태그
  - src : 불러올 파일의 이름.
  - width : 폭. 픽셀단위의 크기.
  - height : 높이. 높이만 지정하면 자동으로 폭을 정해주기때문에 이미지 왜곡 현상을 피할 수 있다.
  - alt :  이미지가 없거나 깨졌을 경우 화면에 표시해주는 값.
  - title : 마우스 롤오버시 뜨는 값.





```html
<!-- table -->
<html>

<body>
  <table border="1">
    <thead>
      <tr>
        <th>이름</th>
        <th>성별</th>
        <th>주소</th>
        <th>회비</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>박창현</td>
        <td>남</td>
        <td rowspan="2">대전</td>
        <td>1000</td>
      </tr>
      <tr>
        <td>박창현</td>
        <td>남</td>
        <td>500</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">합계</td>
        <td>1500</td>
      </tr>

    </tfoot>

  </table>

</body>

</html>
```

- td : table data.  하나의 열(한 칸)을 하나하나 묶음.
  - colspan : 수평 병합
  - rowspan : 수직 병합
- tr : table row. 같은 행에 속하는 td 태그를 묶음.
- table : 전체를 table 태그로 묶어줌.
  - border : 테두리
- 테이블을 의미론적으로 구분(시각적인 차이는 없음), 브라우저가 자동으로 추가.
  - thead 
    - th : 각각의 칸이 진하게 표시된다.
  - tbody 
  - tfoot





2. 속성

```html
<h1>오늘의 명언</h1>
우리 모두는 <strong>자신의 힘</strong>으로 발견한 내용을 가장 쉽게 익힌다. 
(<a target="_blank" href="https://ko.wikipedia.org/wiki/%EB%8F%84%EB%84%90%EB%93%9C_%EC
%BB%A4%EB%88%84%EC%8A%A4" title="전설적인 프로그래머">도널드 커누스</a>)
```

- 속성을 작성하는 순서는 상관 없다.
- a : anchor의 약자. 링크걸어주는 태그
  -  href : 연결될 페이지 주소
  - target : 새로운 탭으로 페이지가 열림
  -  title : 마우스 커서를 올리면(롤오버) 작성한 내용이 뜸.





3. form

- 로그인, 회원가입 등 입력한 정보를 서버에 전송할 때 사용하는 것들.

```html
<html>
<body>
    <form action="http://localhost/login.php">
  		<p>아이디 :<input type="text" name="id"></p>
    	<p>비밀번호 :<input type="password" name="pwd"></p>
    	<p>주소 :<input type="text" name="address"></p>
    	<input type="submit">
    </form>
</body>
</html>
```

- input : 정보를 입력할 수 있는 박스가 생김.
  - text : 텍스트 형식
  - password : 비밀번호 형식
  - name : 각각의 필드에 이름을 붙여서 서버로 전송할 때 이름의 값으로 데이터를 전송.
  - submit : 버튼 생성
- form : 입력된 정보를 어디로 보내줄 것이냐 
  - action : 입력된 정보가 보내질 주소

```
http://localhost/login.php?id=test&pwd=test1234&address=대전
```





```html
<!-- 문자를 입력 받는 form-->
<html>
<body>
  <form action="">
    <p>text: <input type="text" name="id" value="default value"></p>
    <p>pwd :<input type="password" name="pwd" value="default value"></p>
    <p>textarea:
      <textarea cols="50" rows="2">default value</textarea></p>
  </form>
</body>
</html>
```

- input
  - value : 사용자가 페이지를 열었을때 기본적으로 적혀 있는 값
- textarea :  글 쓸 수 있는 창
  - cols : 50글자가 입력될 수 있을 만큼 폭이 커짐.
  - rows: 10줄을 입력할 수 있을 만큼 폭이 커짐.





```html
<!-- dropdown list -->
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form action="http://localhost/color.php">
    <h1>색상</h1>
    <select name="color">
      <option value="red">붉은색</option>
      <option value="black">검은색</option>
      <option value="blue">파란색</option>
    </select>
    <h1>색상2 (다중선택)</h1>
    <select name="color2" multiple>
      <option value="red">붉은색</option>
      <option value="black">검은색</option>
      <option value="blue">파란색</option>
    </select>

    <input type="submit">
  </form>
</body>

</html>
```

- 여러가지 선택지를 선택할 수 있게 끔 하는 것.

- option : 각각의 항목에 써줘서 선택할 수 있는 것들을 정해줌.
  - value : 서버에 보낼 값을 정함.
- select : option 태그를 묶어줌.
  - name : 어떤 이름으로 전송 될 것인지 정함.
  - multiple : 다중선택

```
http://localhost/color.php?color=black&color2=red&color2=black
```





```html
<!-- radio, checkbox -->
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form action="http://localhost/order.php">
    <p>
      <h1>색상 (단일선택)</h1>
      붉은색: <input type="radio" name="color" value="red" checked>
      검은색: <input type="radio" name="color" value="black">
      파란색: <input type="radio" name="color" value="blue">
    </p>
    <p>
      <h1>사이즈 (다중선택)</h1>
      95: <input type="checkbox" name="size" value="95" checked>
      100: <input type="checkbox" name="size" value="100" checked>
      105: <input type="checkbox" name="size" value="105">
    </p>
    <input type="submit">
  </form>
</body>

</html>
```

- input
  - radio 
  - name : 같은 이름으로 지정해주면 하나의 버튼만 선택할 수 있다.
  - checked : 초기 선택 값.
- input
  - checkbox 
  - name : 같은 이름을 가진 여러개의 필드를 다중으로 선택할 수 있다.

```
http://localhost/order.php?color=red&size=95&size=100
```





```html
<!-- button -->
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form action="http://localhost/form.php">
    <input type="submit" value="전송">
    <input type="button" value="버튼" onclick="alert('hello world')">
    <input type="text">
    <input type="reset">
  </form>
</body>

</html>
```

- type의 값이 submit 인 경우는 페이지가 이동함.
- button은 이동하지 않음. 버튼의 UI만 만들어짐. 자바스크립트와 함께 쓸 때 활용도가 생김.
- type의 값이 reset인 경우, form 태그 안의  사용자가 입력한 정보가 모든 정보가 초기화 된다.



```html
<!-- hidden -->
<html>
<hdead>
  <meta charset="utf-8">
</hdead>

<body>
  <form action="http://localhost/hidden.php">
    <input type="text" name="id">
    <input type="hidden" name="hide" value="park">
    <input type="submit">
  </form>
</body>

</html>
```

- UI가 필요없거나 보이지 않게 서버로 어떠한 데이터를 전송할 때 사용하는 필드. 

```
http://localhost/hidden.php?id=asdad&hide=park
```





```html
<!-- label -->
<html>

<body>
  <form action="">
    <p>
      <label for="id_txt">text</label>:
      <input id="id_txt" type="text" name="id" value="default value">
    </p>
    <p>
      <label for="id_pwd">password</label>:
      <input id="id_pwd" type="password" name="pwd" value="default value"></p>
    <p>
      <label>textarea:
        <textarea id="id_ta" cols="50" rows="2">default value</textarea>
      </label>
    </p>

    <p>
      <label>
        <input type="checkbox" name="color" value="red">붉은색
      </label>

      <label for="color_blue">
        <input id="color_blue" type="checkbox" name="color" value="blue">파란색
      </label>
    </p>
  </form>
</body>

</html>
```

- label : 특별한 기능이 있는 것은 아님. 무언가의 이름표.
  - for : 태그의 name 속성과 같은 값을 써서, 누구의 이름표인지 명확하게 연결해준다.

- label 을 클릭하면 input 박스에 커서가 위치한다.

- checkbox의 경우 텍스트를 클릭해도 체크된다.





```html
<!-- method -->
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form action="http://localhost/method.php" method="POST">
    <input type="text" name="id">
    <input type="password" name="pwd">
    <input type="submit">
  </form>
</body>

</html>
```

- get 방식과 post 방식.
- 서버로 데이터를 전송할 때 url에 값을 담아서 보내는 경우 get 방식.
- 데이터를 감추어서 전송하는 경우 post 방식.
- form
  - method : get이 기본값. post를 지정해주면 감추어서 전송.
- form을 이용해서 데이터를 전송하는 경우는 거의 100% post 방식으로 보낸다.
- 의사결정은 서버쪽 엔지니어의 권한.





```html
<!-- file upload-->
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <form action="http://localhost/upload.php" method="post" enctype="multipart/form-data">
    <input tyep="text" name="id">
    <input type="file" name="profile">
    <input type="submit">
  </form>
</body>

</html>
```

- 파일 업로드 시 enctype="multipart/form-data"
- type의 값을 file로 지정.