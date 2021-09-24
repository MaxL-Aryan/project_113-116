function preload()
{

}

function setup()
{
canvas=createCanvas(380,300);
canvas.position(500,280);
video=createCapture(VIDEO);
    video.hide();
    tint_colour="";

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0,0,380,300);
tint(tint_colour);
}

function take_snapshot()
{
    save('aryans_jadu.png');
}

function filter_colour()
{
    tint_colour=document.getElementById("filter_colour").value;
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("Nose X = "+results[0].pose.nose.x);
        console.log("Nose Y = "+results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("PoseNET is Initialize");
}