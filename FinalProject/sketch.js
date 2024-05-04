function preload(){
  title = loadImage("images/title.png")
  note1 = loadImage("images/note.gif")
  note2 = loadImage("images/note.gif")
  note3 = loadImage("images/note.gif")
  note4 = loadImage("images/note.gif")
  block1 = loadImage("images/block.gif")
  note5 = loadImage("images/note.gif")
  note6 = loadImage("images/note.gif")
  note7 = loadImage("images/note.gif")
  note8 = loadImage("images/note.gif")
  block2 = loadImage("images/block.gif")
  left = loadImage("images/Leftdesc.png")
  right = loadImage("images/rightdesc.png")
  sound1 = loadSound('audio/note1.mp3')
  sound2 = loadSound('audio/note2.mp3')
  sound3 = loadSound('audio/note3.mp3')
  sound4 = loadSound('audio/note4.mp3')
  sound5 = loadSound('audio/note5.mp3')
  sound6 = loadSound('audio/note6.mp3')
  sound7 = loadSound('audio/note7.mp3')
  sound8 = loadSound('audio/note8.mp3')
}

function setup() {
  createCanvas(440, 337);
  tempo = 500;
  current=1;
  once = true;
  decay = 200;
  squareX = 5
  squareY = 75
}

function draw() {
  note1.pause()
  note2.pause()
  note3.pause()
  note4.pause()
  note5.pause()
  note6.pause()
  note7.pause()
  note8.pause()
  block1.pause()
  block2.pause()
  background(220);
  image(title,0,0)
  image(note1,0,70)
  image(note2,83,70)
  image(note3,166,70)
  image(note4,249,70)
  image(block1,351,70)
  image(note5,0,171)
  image(note6,83,171)
  image(note7,166,171)
  image(note8,249,171)
  image(block2,351,171)
  image(left,0,273)
  image(right,269,273)
  fill(0,255,0,150)
  square(squareX,squareY,78)
  
  if(millis()%tempo<tempo/5) {
    if (once) {
      current++
      if (current==9) {current=1}
      once=false
      if (block1.getCurrentFrame()==13) {block1.setFrame(0); block2.setFrame(0)} else {block1.setFrame(block1.getCurrentFrame()+1); block2.setFrame(block2.getCurrentFrame()+1)}
    }
  } else (once=true)
    if (current==1) {
      squareX=5
      squareY=75
      if (note1.getCurrentFrame()==1) {sound1.play()}
      if (note1.getCurrentFrame()==2) {sound2.play()}
      if (note1.getCurrentFrame()==3) {sound3.play()}
      if (note1.getCurrentFrame()==4) {sound4.play()}
      if (note1.getCurrentFrame()==5) {sound5.play()}
      if (note1.getCurrentFrame()==6) {sound6.play()}
      if (note1.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==2) {
      squareX=88
      if (note2.getCurrentFrame()==1) {sound1.play()}
      if (note2.getCurrentFrame()==2) {sound2.play()}
      if (note2.getCurrentFrame()==3) {sound3.play()}
      if (note2.getCurrentFrame()==4) {sound4.play()}
      if (note2.getCurrentFrame()==5) {sound5.play()}
      if (note2.getCurrentFrame()==6) {sound6.play()}
      if (note2.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==3) {
      squareX=171
      if (note3.getCurrentFrame()==1) {sound1.play()}
      if (note3.getCurrentFrame()==2) {sound2.play()}
      if (note3.getCurrentFrame()==3) {sound3.play()}
      if (note3.getCurrentFrame()==4) {sound4.play()}
      if (note3.getCurrentFrame()==5) {sound5.play()}
      if (note3.getCurrentFrame()==6) {sound6.play()}
      if (note3.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==4) {
      squareX=255
      if (note4.getCurrentFrame()==1) {sound1.play()}
      if (note4.getCurrentFrame()==2) {sound2.play()}
      if (note4.getCurrentFrame()==3) {sound3.play()}
      if (note4.getCurrentFrame()==4) {sound4.play()}
      if (note4.getCurrentFrame()==5) {sound5.play()}
      if (note4.getCurrentFrame()==6) {sound6.play()}
      if (note4.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==5) {
      squareX=5
      squareY=176
      if (note5.getCurrentFrame()==1) {sound1.play()}
      if (note5.getCurrentFrame()==2) {sound2.play()}
      if (note5.getCurrentFrame()==3) {sound3.play()}
      if (note5.getCurrentFrame()==4) {sound4.play()}
      if (note5.getCurrentFrame()==5) {sound5.play()}
      if (note5.getCurrentFrame()==6) {sound6.play()}
      if (note5.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==6) {
      squareX=88
      if (note6.getCurrentFrame()==1) {sound1.play()}
      if (note6.getCurrentFrame()==2) {sound2.play()}
      if (note6.getCurrentFrame()==3) {sound3.play()}
      if (note6.getCurrentFrame()==4) {sound4.play()}
      if (note6.getCurrentFrame()==5) {sound5.play()}
      if (note6.getCurrentFrame()==6) {sound6.play()}
      if (note6.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==7) {
      squareX=171
      if (note7.getCurrentFrame()==1) {sound1.play()}
      if (note7.getCurrentFrame()==2) {sound2.play()}
      if (note7.getCurrentFrame()==3) {sound3.play()}
      if (note7.getCurrentFrame()==4) {sound4.play()}
      if (note7.getCurrentFrame()==5) {sound5.play()}
      if (note7.getCurrentFrame()==6) {sound6.play()}
      if (note7.getCurrentFrame()==7) {sound7.play()}
    }
    if (current==8) {
      squareX=255
      if (note8.getCurrentFrame()==1) {sound1.play()}
      if (note8.getCurrentFrame()==2) {sound2.play()}
      if (note8.getCurrentFrame()==3) {sound3.play()}
      if (note8.getCurrentFrame()==4) {sound4.play()}
      if (note8.getCurrentFrame()==5) {sound5.play()}
      if (note8.getCurrentFrame()==6) {sound6.play()}
      if (note8.getCurrentFrame()==7) {sound7.play()}
    } 
}

function keyPressed() {
  if (key === '1') {
    if (note1.getCurrentFrame()!=7) {note1.setFrame(note1.getCurrentFrame()+1)}
    else {note1.setFrame(0)}
  }
  if (key === '2') {
    if (note2.getCurrentFrame()!=7) {note2.setFrame(note2.getCurrentFrame()+1)}
    else {note2.setFrame(0)}
  }
  if (key === '3') {
    if (note3.getCurrentFrame()!=7) {note3.setFrame(note3.getCurrentFrame()+1)}
    else {note3.setFrame(0)}
  }
  if (key === '4') {
    if (note4.getCurrentFrame()!=7) {note4.setFrame(note4.getCurrentFrame()+1)}
    else {note4.setFrame(0)}
  }
  if (key === '5') {
    if (note5.getCurrentFrame()!=7) {note5.setFrame(note5.getCurrentFrame()+1)}
    else {note5.setFrame(0)}
  }
  if (key === '6') {
    if (note6.getCurrentFrame()!=7) {note6.setFrame(note6.getCurrentFrame()+1)}
    else {note6.setFrame(0)}
  }
  if (key === '7') {
    if (note7.getCurrentFrame()!=7) {note7.setFrame(note7.getCurrentFrame()+1)}
    else {note7.setFrame(0)}
  }
  if (key === '8') {
    if (note8.getCurrentFrame()!=7) {note8.setFrame(note8.getCurrentFrame()+1)}
    else {note8.setFrame(0)}
  }
  if (keyCode === UP_ARROW) {
    tempo=tempo*2
  }
  if (keyCode === DOWN_ARROW) {
    tempo=tempo/2
  }
}