function hourArc(){
        noFill()
        stroke('blue')
        strokeWeight(5)
        push()
        translate(400,200)
        arc(0,0,300,300,0,hangle)
        pop()
    
}
function minuteArc(){
        noFill()
        strokeWeight(5)
        stroke('lightblue')
        push()
        translate(400,200)
        arc(0,0,290,290,0,mangle)
        pop()
    
}
function secondsArc(){
        noFill()
        strokeWeight(5)
        stroke('red')
        push()
        translate(400,200)
        arc(0,0,280,280,0,sangle)
        pop()
    
}