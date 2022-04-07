var x=0
var y=0
var obj={x,y} // {x:0, y:0}
var combined={
    ['one'+randomKeyString] : 'some value' //key와 value 할당
}

var list=[0,1]
var[
    item1,
    item2,
    item3=-1,
]=list; //item1=0,item2=1, item3=-1, list=[0,1,-1]
[item2,item1]=[item1,item2] //item2=1, item1=0
var obj={
    key1 : 'one',
    key2 : 'two',
};
var {
    key1:newKey1,
    key2,
    key3='default key3 value'
} = obj; // obj=[key1 : 'one', key2 : 'two' ] newKey1 = 'one'

print(newKey1)