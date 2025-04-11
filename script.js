var audio=document.getElementById("myaudio");
var image=document.querySelector("img");
var nam=document.querySelector("h1");
var pl=document.getElementById("play");
var pa=document.getElementById("pause");
var songs=["Bijlee Bijlee Harrdy Sandhu 128 Kbps.mp3","Chaleya - Jawan_64-(PagalWorld.Ink).mp3","Heeriye - Arijit Singh_64-(PagalWorld.Ink).mp3","Kya-Baat-Ay---Harrdy-Sandhu(PagalWorld).mp3","High Rated Gabru - Guru Randhawa_64-(PagalWorld.Ink).mp3"]
var images=["img11.jpg","img9.webp","img10.webp","img2.jpg","img1.webp"];
var names=["Bijlee Bijlee","Chaleya","Heeriye","Kya Baat Ay","High Rated Gabru"];
i=0;
l=songs.length;
pa.style.display="none";
function play(){
audio.play();
pl.style.display="none";
pa.style.display="inline";
}
function pause(){
audio.pause();
pl.style.display="inline";
pa.style.display="none";
}
function next(){
if(i<l-1){
i=i+1;
}else{
    i=0;
}
audio.src="./songs/"+songs[i];
image.src="./photos/"+images[i];
pl.style.display="inline";
pa.style.display="none";
nam.innerHTML=names[i];
audio.play()
audio.playbackRate = 1.0;
audio.muted= false;
}
function back(){
    if(i==0){
    i=l-1;
    }else{
        i=i-1;
    }
    audio.src="./songs/"+songs[i];
    image.src="./photos/"+images[i];
    pl.style.display="inline";
    pa.style.display="none";
    nam.innerHTML=names[i];
    audio.play();
    audio.playbackRate = 1.0;
    audio.muted= false;
}
    audio.onended=function(){
        pl.style.display="inline";
        pa.style.display="none";
   // alert("ended");
    }
    audio.addEventListener("playing",function(){
        pl.style.display="none";
pa.style.display="inline";
    })
audio.onpaused=function(){
pl.style.display="inline";
pa.style.display="none";
}
