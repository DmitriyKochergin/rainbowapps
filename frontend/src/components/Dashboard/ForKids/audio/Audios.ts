export const Audios: { [key: string]: HTMLAudioElement } = {
  'tap': new Audio(process.env.PUBLIC_URL + '/audio/ES_Arcade Game Tap 1.mp3'),
};

export const play = (sound: string) => {
  Object.keys(Audios).forEach((audio) => {
    Audios[audio].pause();
    Audios[audio].currentTime = 0;
  });
  void Audios[sound].play();
};
