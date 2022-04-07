//불가능
const obj={};
obj={name:'이시은'}

//가능 : 무결성(항상 정확한 데이터를 유지하고 있다는 것을 의미) 제약 조건에 위배됨
const obj2={};
obj2['name']='차은우';
Object.assign(obj2,{'name' : '문빈'});
delete obj2.name;

arr3=[]
const arr4=arr3.concat(1) // arr4=[1]
arr5=[...arr4,2,3] // arr5=[1,2,3]
arr6=arr5.slice(0,1)//arr6=[1] arr5=[1,2,3]
const [first, ...arr7]=arr5 // first=1, arr7=[2,3]
