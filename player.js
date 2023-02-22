import audios from "./data.js";
import { path } from "./utils.js";
export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    start(){
        this.update();
        this.audio.onended = () => this.next();
    },
    next(){
        this.currentPlaying++;

        if (this.currentPlaying == this.audioData.length) this.restart();
        this.update();
        this.audio.play();        
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${path(
            this.currentAudio.cover
            )}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);

        this.audio.onended = () => this.next();
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};
