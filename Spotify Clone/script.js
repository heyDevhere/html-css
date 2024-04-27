console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');


let songs=[
    {songName:"Cradles. Sub Urban",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"On & On. Cartoon, Daniel Levi.",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Tobu - If I Disappear ",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Fearless. Lost Sky",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Dreamer. Alan Walker",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Janji Heroes Tonight",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Royalty. Egzod, Maestro Chives, Neoni",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Henri Werner - Burned",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
]

songItems.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
         audioElement.pause();
         masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
         gif.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //  console.log("timeupdate");
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
     myProgressBar.value=progress;  
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
});

const makeplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

 })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(element)=>{
    makeplay();
    songIndex=parseInt(element.target.id);
    element.target.classList.remove("fa-circle-play");
    element.target.classList.add("fa-pause-circle");
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterPlay.classList.add("fa-play-circle");
       masterPlay.classList.remove("fa-pause-circle");
 })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
       songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
       songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");

})

