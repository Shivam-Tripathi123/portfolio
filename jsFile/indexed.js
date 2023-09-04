 /* Slide Window*/
var navMenuanchorTags=document.querySelectorAll('.navbar a');
console.log(navMenuanchorTags);
for(var i=0; i<navMenuanchorTags.length; i++)
{
    navMenuanchorTags[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        console.log(targetSectionID)
        var targetSection=document.getElementById(targetSectionID);
        var interval = setInterval(function()
        {
            var targetSectionCordinates=targetSection.getBoundingClientRect();
            if(targetSectionCordinates.top<=0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,60)
        },50)
    });
}

 






var skillContainer=document.getElementById('skills');
var progressBar=document.querySelectorAll('.container>div');
// var progress=document.querySelectorAll('.container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function  intialiseBars()
{
    console.log(progressBar);
    for(let bar of progressBar)
    {
        bar.style.width=0+'%';
    }
}

intialiseBars();

function fillBars()
{
    for(let bar of progressBar)
    {
        let currentWidth=0;
        var targetWidth=bar.getAttribute('data-bar-width');
         console.log(targetWidth)
        let intervalss=setInterval(function()
        {
            if(currentWidth>targetWidth)
            {
                clearInterval(intervalss);
                return;
            }
            currentWidth++;
            console.log(currentWidth)
            bar.style.width=currentWidth + '%';
        },7)
    }
}

function checkScroll()
{
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone &&  coordinates.top<window.innerHeight)
    {
        animationDone=true;
        console.log("Hlo");
        fillBars();
    }
    else if( coordinates.top>window.innerHeight)
    {
        animationDone=false;
        intialiseBars=0;
    }
}