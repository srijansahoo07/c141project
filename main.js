song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
	image(video, 0, 0, 600, 500);
}

function play()
{
	song.play();

}