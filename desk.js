status = "";

function preload()
{
   img = loadImage("desk.jpg");
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log('Model Loaded!!1');
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{   
    if (error)
    {
        console.error(error);
    }
    console.log(results);
}

function back()
{
    window.location = "index.html";
}