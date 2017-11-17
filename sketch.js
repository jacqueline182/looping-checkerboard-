function draw() {
   createCanvas(500,400);
}

function draw() {
 var counter = 0
 var x = 50;
 var y = 50
 background(0);
 fill(250);

 while (counter < 8) {
   rect(counter * 50, y, 50,50)
   counter = counter + 1
 }
 counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 50, 50,50)
   counter = counter + 1
 }
 counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 100, 50,50)
   counter = counter + 1
 }  
 counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 150, 50,50)
   counter = counter + 1
 } 
counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 200, 50,50)
   counter = counter + 1
 }
 counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 250, 50,50)
   counter = counter + 1
 }
counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 300, 50,50)
   counter = counter + 1
 }  
  counter = 0
 while (counter < 8) {
   rect(counter * 50, y + 350, 50,50)
   counter = counter + 1
  }  
}
/*

while(x < width) {
 ellipse(x, y, 40, 40)
 x +=50

 ellipse(x, y, 40, 40);
 x += 50;
 
 ellipse(x, y, 40, 40);
 x += 50;
 
 ellipse(x, y, 40, 40);
 x +=50
 
 ellipse(x, y, 40, 40);
 x +=50;
 
 y += 50
 x-= 200
 }

*/