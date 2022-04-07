class Shape{
    static create(x,y) {return new Shape(x,y);}
    name='Shape';
    //생성자
    constructor(x,y){
        this.move(x,y);
    }
    move(x,y){
        this.x;
        this.y;
    }
    area(){
        return 0;
    }
}

class Circle extends Shape{ //extends 키워드로 Shape 상속
    constructor(x,y,radius){
        super(x,y) //부모함수 참조 
        this.radius = radius
    }
    area(){
        if (this.radius==0) return super.area()
        return this.radius*this.radius;
    }
}

var s = new Shape(0,0);
var c=new Circle(0,0,10)
s.area();