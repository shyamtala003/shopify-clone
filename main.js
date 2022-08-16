let video1=document.getElementById('video1');
console.log(video1);
let playBtn =document.getElementById('play');
console.log(playBtn);

playBtn.addEventListener("click",()=>
{
    if(playBtn.getAttribute("name")==="pause-outline")
    {
        playBtn.setAttribute("name","play-outline")
        video1.pause();
    }else
    {
        playBtn.setAttribute("name","pause-outline")
        video1.play();
    }
})


// script for play pause earth video
let earthVideo= document.getElementById('earthVideo');
let earthPlay = document.getElementById('earthPlay');

earthPlay.addEventListener("click",()=>
{
    if(earthPlay.getAttribute("name")==="pause-outline")
    {
        earthPlay.setAttribute("name","play-outline")
        earthVideo.pause();
    }else
    {
        earthPlay.setAttribute("name","pause-outline")
        earthVideo.play();
    }
})