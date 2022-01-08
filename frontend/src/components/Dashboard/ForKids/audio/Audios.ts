export const Audios: { [key: string]: HTMLAudioElement } = {
  'tap': new Audio(process.env.PUBLIC_URL + '/audio/click/click.mp3'),
};

const tryAudios = () => {
  Object.keys(Audios).forEach((audio) => {
    void Audios[audio].play();
  });
};

setTimeout(() => {
  tryAudios();
}, 1000);

export const play = (sound: string) => {
  Object.keys(Audios).forEach((audio) => {
    if (Audios[audio].currentTime > 0) {
      Audios[audio].pause();
      Audios[audio].currentTime = 0;
    }
  });
  void Audios[sound].play();
};
