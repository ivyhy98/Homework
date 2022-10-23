// Javascript scripts
const playlists = [
            {
                name: 'Too Tired', 
                description: "This'll have you mellow", 
                index: 0, 
                songs: [
                    {
                        name: 'Lying to You', 
                        artist: 'Keaton Henson', 
                        imageLink: './images/lying.jpg'
                    },
                    {   
                        name: 'Pyotr', 
                        artist: 'Bad Books', 
                        imageLink: './images/pyotr.jpg',
                    },
                ]
            }
        ]
class Playlist {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.index;
        this.songs = [];
    }
    addPlaylist(list){
        playlists.push(list);
        this.index = playlists.findIndex(item => item.name === list.name);
        console.log(`playlist added at index ${this.index}`)
    }

    addToPlaylist(song){
        songs.push(song)
    }

    
}

class Song {
    constructor(name, artist, imageLink){
        this.name = name;
        this.artist = artist;
        this.imageLink = imageLink;
    }
}


const ulEl = document.querySelector('.playlistUl');
const playlistButton = document.querySelector('.playlistButton');
const playlistForm = document.querySelector('#playlistForm');
const playlistObj = document.querySelectorAll('.playlist');
const headingName = document.querySelector('#name');
const headingDesc = document.querySelector('#description');
const songName = document.querySelector('.song-name');
const songArtist = document.querySelector('.song-artist');
const changeButton = document.querySelector('.change-song');
playlists.forEach((element)=>{
        const liEl = document.createElement('li');
        liEl.classList.add('playlist');
        liEl.setAttribute('data', element.index);
        liEl.textContent = `${element.name}`;
        ulEl.append(liEl);
})

//When you press create a new playlist show the form
 playlistButton.addEventListener('click', (evt)=>{
    evt.preventDefault();
    playlistForm.style.display = 'flex';
    ulEl.style.display = 'none';
    console.log('new form being used');
 })


//When playlist form submitted
 playlistForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form = new FormData(evt.target)
    const name = form.get("playlistName");
    const desc = form.get("playlistDesc");
    const newPlaylist = new Playlist(name, desc);
    newPlaylist.addPlaylist(newPlaylist);
    showP();
    console.log(`${name} added`);
    
    playlistForm.style.display = 'none';
    ulEl.style.display = 'block';
    
 })
//Show List of Playlists
function showP(){
    playlists.forEach((element)=>{
        const liEl = document.createElement('li');
        liEl.classList.add('playlist');
        liEl.setAttribute('data', element.index);
        liEl.textContent = `${element.name}`;
        ulEl.append(liEl);
})
}
 
 //When you Click a playlist
ulEl.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if(!evt.target.matches('li')){
        return;
    }
    let data = evt.target.getAttribute('data');

    clickedPlaylist(playlists[data]);
})

 function clickedPlaylist(list){
    headingName.textContent = `${list.name}`;
    headingDesc.textContent = `${list.description}`;
    if(list.songs.length){
        clickedSong(list.songs[0]);
    } else{
        songName.textContent = "No songs on this playlist";
        songArtist.textContent = "";
    }
    
 }

 //Show song playing
function clickedSong(song){
    songName.textContent = `${song.name}`;
    songArtist.textContent = `${song.artist}`;
}

//change Song function
function changeSong(){
    console.log(songName);
    let plIndex = playlists.findIndex(item => item.name ===headingName.textContent);
    let pl = playlists[plIndex];
    let songIndex = pl.songs.findIndex(item => item.name === songName.textContent);
    let currentSong = pl.songs[songIndex];
    console.log(pl.songs.length);
    console.log(songIndex);

    if(songIndex === pl.songs.length -1){
         let newSong = pl.songs[0];
         clickedSong(newSong);
        console.log('end of playlist')
    }else{
        let newSong = pl.songs[songIndex + 1];
        clickedSong(newSong);
    }
    
}

//change song Event listener
changeButton.addEventListener('click', changeSong);















