// var xmlhttp = new XMLHttpRequest();
// var url = "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1min/time/00:00/23:59.json";
//
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         myFunction(myArr);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();
//
// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' +
//         arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
// }

//-------------------------------------

$(document).ready(function(){
    $("button").click(function(){

        var bpm = Math.floor(Math.random() * 140) + 60; //eventually replace this with fitbit data
        var playlist = "<iframe src=";

        if(bpm <= 70){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A3J3mTk0N0NzDOFgnp67Z75";
        }
        else if(bpm <= 80){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A4BKT5olNFqLB1FAa8OtC8k";
        }
        else if(bpm <= 90){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A6gTlyWrX5XJqU9J4sZfNj4";
        }
        else if(bpm <= 100){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A5FJXhjdILmRA2z5bvz4nzf";
        }
        else if(bpm <= 110){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A5p9ILyu1wb4KKHORoXU8nb";
        }
        else if(bpm <= 120){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A1GQLlzxBxKTb6tJsD4RxHI";
        }
        else if(bpm <= 130){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A4jCr1WuRoFiUbcqlja4dWR";
        }
        else if(bpm > 130){
          playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Anikewomen%3Aplaylist%3A0yfTPCk6Cnhm9wtoEaXXlo";
        }

        playlist = playlist + ' width="260" height="100%" frameborder="0" allowtransparency="true"></iframe>';

        $("#playlist").html(playlist);
    });
});
