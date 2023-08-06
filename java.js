console.log("Welcome to Spotify")

let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let fifa = document.getElementById("fifa");
let songitem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songname:"Ruk jana nhi-salam-e-ishq",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Bhula dena-salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Love me-salam-e-ishq",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Assan nhi-salam-e-ishq",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Ham Tumhare-salam-e-ishq",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"haule haule-salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/6.jpg"},
    {songname:"Haal qa hai-salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/7.jpg"},
    {songname:"tujh mein rab-salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/8.jpg"},
    {songname:"Kabhi kabhi-salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/9.jpg"}

]

songitem.forEach((element,i) => {
      element.getElementsByTagName("img")[0].src = songs[i].coverpath;
      element.getElementsByClassName("sp")[0].innerText = songs[i].songname;
});

masterplay.addEventListener('click',()=>{
    // audioElement.play();
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        document.getElementById("about").innerText = songs[songindex].songname
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate",()=>{
   console.log("Time update");
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   progressbar.value = progress;
})
progressbar.addEventListener("change",()=>{
    audioElement.currentTime = (progressbar.value*audioElement.duration)/100;
})

let makeallplay = () =>{
    Array.from(document.getElementsByClassName("play")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName("play")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
          console.log(e.target);
          songindex = parseInt(e.target.id);
          makeallplay();
          e.target.classList.remove("fa-circle-play")
          e.target.classList.add("fa-circle-pause")
          audioElement.src = `songs/${songindex+1}.mp3`
          audioElement.currentTime = 0
          audioElement.play();
          gif.style.opacity = 1;
          masterplay.classList.remove("fa-circle-play");
          masterplay.classList.add("fa-circle-pause");
          document.getElementById("about").innerText = songs[songindex].songname
    })
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=0)
    {
        songindex =0 ;
    }
    else{
        songindex = songindex-1;
    }
    
    document.getElementById("about").innerText = songs[songindex].songname
    audioElement.src = `songs/${songindex+1}.mp3`
    audioElement.currentTime = 0
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");

})

document.getElementById("next").addEventListener("click",()=>{

    if(songindex>=9)
    {
        songindex =0 ;
    }
    else{
        songindex = songindex+1;
    }

    document.getElementById("about").innerText = songs[songindex].songname
    audioElement.src = `songs/${songindex+1}.mp3`
    audioElement.currentTime = 0
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");

})