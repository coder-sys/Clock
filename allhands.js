class Hourhand{
    constructor(){

    }
    draw=function(){
        push()
        translate(400,200)
        rotate(hangle)
        fill('blue')
        noStroke()
        rect(0,0,80,10)
        pop()
    }
}
class Minutehand{
    constructor(){

    }
    draw=function(){
        push()
        translate(400,200)
        noStroke()
        fill('red')
        rotate(sangle)
        rect(0,0,100,5)
        pop()
    }
}
class Secondhand{
    constructor(){

    }
    draw=function(){
        push()
        translate(400,200)
        noStroke()
        fill('lightblue')
        rotate(mangle)
        rect(0,0,90,10)
        pop()
    }
}