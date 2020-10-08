  

- while
  - 조건이 true이면 반복함.

```javascript
while(조건){
	반복해서 실행할 코드
}
```

```javascript
var a = 0;
while(a<10){
	document.write("Hello </br>");
	a++;
}
```



- for

```javascript
for(초기식; 조건식; 증감식){
	반복해서 실행할 코드
}
```

```javascript
for(var a= 0; a<10; a++){
	document.write("Hello </br>");
}
```



-  break
  - 반복작업을 중간에 중단시킴.

```javascript
for(var i = 0; i<10; i++){
	if(i===5){
		break;
	}
	document.write("Hello </br>");
}
```



- continue
  - 반복작업중 조건이 맞으면 아래 문장을 뛰어넘고 다시 반복함.

```javascript
for(var i = 0; i<10; i++){
	if(i===5){
		continue;
	}
	document.write("Hello </br>");
}
```

