객체(Object)

- 배열의 인덱스는 숫자 였지만, 객체의 인덱스는 문자를 지정할 수 있다.
- 맵, 딕셔너리, 연관배열이라는 데이터 타입이 객체에 해당한다.

```javascript
var grades = {'A' : 100, 'B' : 80, 'C' : 60, 'D' : 40};
```

```javascript
var grades = {};
grades['A'] = 100;
grades['B'] = 80;
grades['C'] = 60;
grades['D'] = 40;
```

```javascript
var grades = new Object;
grades['A'] = 100;
grades['B'] = 80;
grades['C'] = 60;
grades['D'] = 40;
```

```javascript
alert(grades['A']);
alert(grades.A);
```



- 객체의 반복문

```javascript
var grades = {'A' : 100, 'B' : 80, 'C' : 60, 'D' : 40};
for(key in grades){
	document.write("key : "+ key + " value : "+ grades[key] +"<br/>");
}
```

