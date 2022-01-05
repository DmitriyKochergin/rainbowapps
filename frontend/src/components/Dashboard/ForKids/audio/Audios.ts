export const Audios: { [key: string]: HTMLAudioElement } = {
  'tap': new Audio(process.env.PUBLIC_URL + '/audio/click/click.mp3'),
};

export const play = (sound: string) => {
  Object.keys(Audios).forEach((audio) => {
    Audios[audio].pause();
    Audios[audio].currentTime = 0;
  });
  void Audios[sound].play();
};
