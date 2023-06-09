
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';
const currentTime = localStorage.getItem(CURRENT_TIME);

function onPlay(evt) {
  localStorage.setItem(CURRENT_TIME, evt.seconds);
}

player.on("timeupdate", throttle(onPlay, 1000));
player.setCurrentTime(currentTime);
