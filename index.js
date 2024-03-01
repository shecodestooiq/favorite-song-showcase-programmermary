


function displaySongInfo() {
    let display = document.getElementById('info');
    let Sname = document.getElementById("SongName").value;
   
    let link = document.getElementById("YouTubeLink").value;
    let iframe = document.getElementById("YouTubeLink");
    let Discription = document.getElementById("dicription").value;
    let y = document.getElementById("year").value;
     iframe.src = link
    display.style.visibility = 'visible';
   
    document.getElementById("sname").innerHTML = Sname;
   // document.getElementById("YouTube").innerHTML =vedio ;
    document.getElementById("dis").innerHTML = Discription;
    document.getElementById("songYear").innerHTML = y;
   

}
document.getElementById("song").addEventListener("submit" , function(event){
    event.preventDefault();
    displaySongInfo();
})
module.exports = {
    displaySongInfo: displaySongInfo,
};
