let can;let tv;let tChoice;

function setup() {
can=createCanvas(700,500);can.position(30,25);
can.class('bdd');
tChoice=new logo(200,100,0);
textSize(20);
start2();
tv=new logo(200,200,0);

}

function draw() {
//clear();
background(200,160,120);
chgRec();
tv.set1(200,300);
nineSq(tv,350,6);
koch(tv,100,3);
tv.set1(350,150,0);
duoPoly(tv,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
text("1st length"+multvec[0],30,400);
text("2st length"+multvec[2],30,420);
text("3st length"+multvec[1],30,440);
text("4st length"+multvec[3],30,460);
}
