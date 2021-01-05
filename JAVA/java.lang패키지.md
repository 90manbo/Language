- java.lang 패키지는 자바프로그래밍에 가장 기본이 되는 클래스들을 포함하고 있다.
- import문 없이도 사용할 수 있도록 되어있다.
- String클래스나 System클래스를 import문 없이 사용할 수 있었던 이유이다.



1. Object클래스

- Object클래스는 모든 클래스의 최고 조상이기 때문에 Object클래스의 멤버들은 모든 클래스에서 바로 사용 가능하다.

| Object클래스의 메서드                     | 설명                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| protected Object clone()                  | 객체 자신의 복사본을 반환한다.                               |
| public boolean equals(Object obj)         | 객체 자신과 객체 obj가 같은 객체인지 알려준다. 같으면 true   |
| protected void finalize()                 | 객체가 소멸될 때 가비지 컬렉터에 의해 자동적으로 호출된다. 이 떄 수행되어야하는 코드가 있는 경우에만 오버라이딩한다. |
| public Class getClass()                   | 객체 자신의 클래스 정보를 담고있는 Class 인스턴스를 반환한다. |
| public int hashCode()                     | 객체 자신의 해시코드를 반환한다.                             |
| public String toString()                  | 객체 자신의 정보를 문자열로 반환한다.                        |
| public void notify()                      | 객체 자신을 사용하려고 기다리는 쓰레드를 하나만 깨운다.      |
| public void notifyAll()                   | 객체 자신을 사용하려고 기다리는 모든 쓰레드를 깨운다.        |
| public void wait()                        | 다른 쓰레드가 notify()나 notifyAll()을 호출할 때까지 현재 쓰레드를 무한히 또는 지정된 시간(timeout, nanos)동안 기다리게 한다. (timeout은 천 분의 1초, nanos 10^9분의 1초) |
| public void wait(long timeout)            | 위와 동일.                                                   |
| public void wait(long timeout, int nanos) | 위와 동일.                                                   |



1-1. equls 메서드

- 매개변수로 객체의 참조변수를 받아서 비교하여 그 결과를 boolean값으로 알려 주는 역할을 한다.

- 아래의 코드는 Object클래스에 정의되어 있는 equals메서드의 실제 내용이다.

```java
public boolean equals(Object obj){
	return (this==obj);
}
```

- 두 객체의 같고 다름을  주소값으로 판단하므로 서로 다른 두 객체를 이 것으로 비교하면 항상 false는 갖는다.
- 두 개의 참조변수가 같은 객체를 참조하고 있는지, 즉 두 참조변수에 저장된 값이 같은지를 판단하는 기능.

```java
class EqualsEx{
	public static void main(String args[]){
		Value v1 = new Value(10);
		Value v2 = new Value(10);
		
		if(v1.equlas(v2)){
			System.out.println("same");
		}else{
			System.out.println("diff");
		}
		
		v2 = v1;
		
		if(v1.equals(v2)){
			System.out.println("same");
		}else{
			System.out.println("diff");
		}
	
	}
}

class Value{
	int value;
	
	Value(int value){
		this.value = value;
	}
}


diff
same
```

- 자주 사용하는 String클래스는 equals메서드를 그대로 사용하는 것이 아닌 오버라이딩을 통해서 String 인스턴스가 갖는 두 문자열 값을 비교하도록 되어있다.

```java
class Person{
	long id;
	
	public boolean equals(Object obj){
		if(obg!=null && obj instanceof Person){
			return id == ((Person)obj).id;
		}else {
			return false;
		}
	}
	
	Person(long id){
		this.id = id;
	}
}
```



1-2. hashCode 메서드

- 해싱기법에 사용되는 해시함수를 구현한 것이다.
- 해싱은 데이터관리기법 중의 하나이며 다량의 데이터를 저장하고 검색하는데 유용하다.
- 해시함수는 찾고자하는 값을 입력하면, 그 값이 저장된 위치를 알려주는 해시코드를 반환한다.
- 일반적으로 해시코드가 같은 두 객체가 존재하는 것이 가능하지만, Object클래스에서 정의된 hashCode메서드는 객체의 주소값을 이용해서 해시코드를 만들어 반환하기 떄문에 한 번의 실행에서 서로 다른 두 객체는 결코 같은 해시코드를 가질 수 없다.
- String 클래스는 문자열의 내용이 같으면, 동일한 해시코드를 반환하도록 오버라이딩 되어있다.
- System.identityHashCode(Object x)는 객체의 주소값으로 해시코드를 생성하기 때문에 모든 객체에 대해 항상 다른 해시코드값을 반환할 것을 보장한다. 



1-3. toString 메서드

- 인스턴스에 대한 정보를 문자열로 제공할 목적으로 정의한 것이다.

```java
public String toString(){
	return getClass().getName() + "@"
		+ Integer.toHexString(hashCode());
}
```

- String 크래스의 toString()은 String인스턴스가 갖고있는 문자열을 반환하도록 오버라이딩 되어있다.



1-4. clone 메서드

- 자신을 복제하여 새로운 인스턴스를 생성하는 메서드이다.
- 단순히 멤버변수의 값을 복사하기때문에 배열이나 인스턴스가 멤버로 정의되어 있는 클래스의 인스턴스는 완전한 복제가 이루어지지 않는다.
- 배열의 경우 복제된 인스턴스도 같은 배열의 주소를 갖기 때문에 복제된 인스턴스의 작업이 원래의 인스턴스에 영향을 미치게 된다.

```java
class Point implements Cloneable{
	int x;
	int y;
	Point(int x, int y){
		this.x = x;
		this.y = y;
	}
	
	public String toString{
		return "x="+x", y="+y;
	}
	
	public Object clone(){
		Object obj = null;
		try{
			obj = super.clone();
		}catch(CloneNotSupportedException e){}
		return obj;
	}
}

class CloneEx{
	public static voic main(String args[]){
		Point one = new Point(3, 5);
		Point two = (Point)one.clone();
		System.out.println(one);
		System.out.println(two);
	}
}


x=3, y=5
x=3, y=5
```



2. String 클래스

- 자바에서는 문자열을 위한 클래스를 제공한다.

- String클래스에는 문자열을 저장하기 위해서 문자형 배열 변수(char[]) value을 인스턴스변수로 정의해놓고 있다. 인스턴스 생성 시 생성자의 매개변수로 입력받는 문자열을 이 인스턴스변수(value)에 문자형 배열(char[])로 저장되는 것이다.

```java
public final class String implements java.io.Serializable, Comparable {
	private char[] value;
}
```

- 