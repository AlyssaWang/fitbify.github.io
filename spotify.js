var bpm = 100;
var playlist = "<iframe src=";

if(bpm <= 60){
  playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A4BKT5olNFqLB1FAa8OtC8k";
}
else if(bpm <= 100){
  playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A06CemleTteSalaVGVMbgFy";
}
else if(bpm <= 120){
  playlist = playlist + "https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A5p9ILyu1wb4KKHORoXU8nb";
}

playlist = playlist + ' width="260" height="100%" frameborder="0" allowtransparency="true"></iframe>';

$(document).ready(function(){
    $("button").click(function(){
        $("div").html(playlist);
    });
});
