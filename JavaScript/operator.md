operator

- 동등연산자(equal operarot) / ==
  - 좌항, 우항을 비교해서 값이 같으면 true, false가 된다. 
  - 좌항과 우항이 데이터 형식이 달라도 정보의 의미가 동일하면 같은 값으로 인정한다.

```javascript
alert(1==2); //false
alert(1==1); //true
alert("one"=="two"); //false
alert("one"=="one"); //true
```



- 일치연산자(strict equal operator) / ===
  - 좌항, 우항이 정확하게 같을 때 true, 다르면 false가 된다.
  - 좌항, 우항의 데이터 형식도 정확하게 일치할 때만 true.

```javascript
alert(1 === "1"); //false
alert(1 == "1"); //true
```



- === 을 사용하자
  - == 에서 1을 true, 1이 아닌 수를 false로 본다.
  - NaN은 0을 0으로 나누었을 때, 성립하지 않는 수를 의미함.
  - NaN은 계산할 수 없음을 나타낸다.

```javascript
alert(null == underfined); //true
alert(null === underfined); //false
alert(true == 1); //true
alert(true === 1); //false
alert(true == '1'); //true
alert(true === '1'); //false
alert(0 === -0); //true
alert(NaN === NaN); //false
```



- !=

```javascript
alert(1 != 2); //true
alert(1 != 1); //false
alert("one" != "two") //true
alert("one" != "one") //false
```



- !==
  - 정확하게 같지 않다는 의미.



- 부등호

```javascript
alert(10 > 1);	//true
alert(10 >= 20); //false
```

