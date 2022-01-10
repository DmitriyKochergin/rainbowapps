// cache
export const AudiosCache: { [key: string]: HTMLAudioElement } = {};

export const play = (sound: string) => {
  if (!Object.keys(AudiosCache).includes(sound)) {
    AudiosCache[sound] = new Audio(process.env.PUBLIC_URL + '/audio/' + sound + '.mp3');
  }

  Object.keys(AudiosCache).forEach((audio) => {
    if (AudiosCache[audio].currentTime > 0) {
      AudiosCache[audio].pause();
      AudiosCache[audio].currentTime = 0;
    }
  });
  void AudiosCache[sound].play();
};
