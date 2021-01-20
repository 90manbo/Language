- 함수
  - 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여줌.

```javascript
function 함수명(매개변수){
	코드 내용
	return 반환값
}
```

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <script type="text/javascript">
            function get_argument(arg){	//매개변수, parameter
                return arg + 1;
            }
          
            alert(get_argument(1)); //인자, argument
        </script>
    </body>
</html>
```

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <script type="text/javascript">
            function numbering(){
               var a = 0;
               while(a<10){
                   document.write(a+"</br>");
                   a++;
               }
            }
            numbering();
            
            numbering = function(){
               var a = 0;
               while(a<10){
                   document.write(a+"</br>");
                   a++;
               }
            } //함수를 정의해서 numbering 변수에 대입하여 사용할 수 있다.
            numbering();
            
            (function(){
               var a = 0;
               while(a<10){
                   document.write(a+"</br>");
                   a++;
               }
            })(); //익명함수. 정의하고 바로 호출됨. 일회성
        </script>
    </body>
</html>
```