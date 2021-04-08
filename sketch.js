let hands = []
var angleh = 0
var anglem = 0
var angles = 0
let d,n,s,h,mangle,hangle,sangle
let hourhand,minutehand,secondhand
let engine
let world
function setup() {
  let c = createCanvas(800,400);
  angleMode(DEGREES)
  minutes=new minuteArc()
  hourhand=new Hourhand()
  secondhand=new Secondhand()
  minutehand=new Minutehand()
}
function draw(){
  background(0);  
   d = new Date();
   h = d.getHours();
   m = d.getMinutes()
   s = d.getSeconds()
   mangle = ((m/60)*360)-90
   hangle = ((h/12)*360)-90
   sangle = ((s/60)*360)-90
   minuteArc()
   hourArc()
   secondsArc()
   hourhand.draw()
   secondhand.draw()
   minutehand.draw()
}
