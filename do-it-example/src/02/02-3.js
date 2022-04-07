var array1 = ["one", "two"];
var array2=["three","four"];
const combined=[...array1, ...array2];
//결과 combined=["one", "two", "three", "four"]
const [first,second, three='empty', ...others] = array1;
// 결과 first='one', second='two', three='empty', ...others=[]
func(...args){var[first,...others]=args;}
//함수 인자 배열을 args변수에 할당했다.