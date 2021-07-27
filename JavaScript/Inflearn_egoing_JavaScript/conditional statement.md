- if

```javascript
if(true){
	alert('result');
}	//실행
```

```javascript
if(false){
	alert('result');
}	//실행안됨
```



- else

```javascript
if(true){
	alert(1);	//실행
}else {
	alert(2);	//실행안됨
}
```

```javascript
if(false){
	alert(1);	//실행안됨
}else {
	alert(2);	//실행
}
```

```javascript
if(false){
	alert(1);	//실행안됨
}else if(true){
	alert(2);	//실행
}else if(true){
	alert(3);	//실행안됨
}else {
	alert(4);	//실행안됨
}
```



- boolean의 대체
  - 1은 true, 1이 아닌 수는 false
  - 빈 문자열은 false로 간주
  - undefined는 false로 간주
  - null, NaN은 false로 간주

```javascript
if(0){
	alert(1);
}	//실행안됨
if(1){
	alert(2);
}	//실행
```

```javascript
if(!''){
	alert('빈문자열');
}	//실행
if('abc'){
	alert('')
}	//실행
if(undefined){
	alert('undefined');
}	//실행안됨
```

```javascript
var a; //undefined
if(!a){
	alert('값이 할당안됨');
}	//실행
```

```javascript
if(!null){
	alert('null');
}	//실행

if(!NaN){
	alert('NaN');
}	//실행
```

