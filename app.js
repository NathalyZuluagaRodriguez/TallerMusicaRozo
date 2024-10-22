import { playList } from "./list.js";

let currentSong = 0;

window.addEventListener('DOMContentLoaded', () => {
    MusicCard(currentSong);
});

function MusicCard(card) {
    const containerAlbum = document.querySelector('.container-album');
    containerAlbum.innerHTML = '';

    // sirve par que cuando cargue la pagina limpia el contenedo actual

    const cardMusic = playList[card];
    
    const container = document.createElement('div');
    container.id = 'container-album';
    container.classList.add('container-album');

    const imgMusic = document.createElement('img');
    imgMusic.src = cardMusic.img;

    const titleMusic = document.createElement('h2');
    titleMusic.textContent = cardMusic.titleMusic;

    const singersMusic = document.createElement('h3');
    singersMusic.textContent = cardMusic.singersMusic;

    container.appendChild(imgMusic);
    container.appendChild(titleMusic);
    container.appendChild(singersMusic);

    containerAlbum.appendChild(container);

    const audio = document.getElementById('audio');
    audio.src = cardMusic.song;
}

function nextSong() {
    if (currentSong === playList.length - 1) {
        currentSong = 0;  // Cuando esta en la última canción, se debe volver al inicio
    } else {
        currentSong++;    // Si no, se avanza una canción
    }
    MusicCard(currentSong);
}

function previousSong() {
    if (currentSong === 0) {
        currentSong = playList.length - 1;  // Si es la primera canción, se debe ir al final
    } else {
        currentSong--;    // Si no, se retrocede una canción
    }
    MusicCard(currentSong);
}

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
forward.addEventListener('click', nextSong);
rewind.addEventListener('click', previousSong);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});