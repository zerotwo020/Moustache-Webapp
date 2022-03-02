

noseX=0;
noseY=0;

function preload() {
   moustache_image=loadImage('https://i.postimg.cc/767yggHd/mustache-png-32-1.png')
}
 function setup() {
     canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
 }

 function draw() {
     image(video,0,0,300,300);
     image(moustache_image, noseX -22 ,noseY ,50,30);
     
 }
 function take_snapshot() {
save('myFilterImage.png');
 }
 function modelLoaded() {
     console.log('posNet is initialized');
 }

 function take_snapshot() {
     save('myFilterImage.png');
 }

 function gotPoses(results) {
if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x
    noseY= results[0].pose.nose.y
    console.log("nose x = " + noseX);
    console.log("nose y = " +  noseY);
}
 }