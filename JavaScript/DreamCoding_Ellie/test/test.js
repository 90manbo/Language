var a = 1;
b = 2;

delete this.a; // strict 모드에서는 TypeError를 출력합니다. 그렇지 않으면 자동적으로 실패합니다.
// delete this.b;

console.log(a, b); // ReferenceError를 출력합니다.
// 'b' 프로퍼티는 삭제되었고, 어디에도 존재하지 않습니다.