// cache
export const AudiosCache: { [key: string]: HTMLAudioElement } = {};

let timeoutObject: NodeJS.Timer | undefined;

export const play = (sound: string, timeout?: number ) => {
  if (!Object.keys(AudiosCache).includes(sound)) {
    AudiosCache[sound] = new Audio(process.env.PUBLIC_URL + '/audio/' + sound + '.mp3');
  }

  if (timeout !== undefined && timeoutObject) {
    clearTimeout(timeoutObject);
  }

  function playInternal() {
    Object.keys(AudiosCache).forEach((audio) => {
      if (AudiosCache[audio].currentTime > 0) {
        AudiosCache[audio].pause();
        AudiosCache[audio].currentTime = 0;
      }
    });
    void AudiosCache[sound].play();
  }

  if (timeout) {
    timeoutObject = setTimeout(() => {
      playInternal();
      timeoutObject = undefined;
    }, timeout);
  } else {
    playInternal();
  }

};
