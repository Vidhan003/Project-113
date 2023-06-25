function preload()
{

}

function setup()
{
    canvas = createCanvas(400,400);

}

function draw()
{
    image(video,0,0,640,480);

}

function take_snapshot()
{
    save('Vidhan.png');
}

