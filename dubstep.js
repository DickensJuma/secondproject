function dubster(song){
var a = song.split('WUB');


for(var i = 0; i >= a.length; i--){
if(a[i] === "") {
a.splice(i, 1);

}return a.splice(" ").join();
    }
    
}

console.log(dubster('IWUBLOVEWUBYOU'));


function songDecoder(song){
    return song.replace(/(WUB){1,3}/g, " ").trim();
}

console.log(songDecoder('IWUBLOVEWUBYOU'));