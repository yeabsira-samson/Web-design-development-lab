//exercise 1
var Movie ={
    title :'The hate you give ',
     year:'2025',
     genres:'W',

  infos(title){
    console.log(`${Movie.title}(${Movie.year}):${this.genres}`);
    }
}

Movie.infos()
//exer 2
let playlist = {
  songs: [],
  addSong: function(song) {
    this.songs.push(song);
    console.log(this.songs);
  }
};
playlist.addSong("Song1");
playlist.addSong("Song2");

console.log(Object.keys(playlist));
