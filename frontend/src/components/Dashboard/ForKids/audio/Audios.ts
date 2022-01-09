export const Audios: { [key: string]: HTMLAudioElement } = {
  'tap': new Audio(process.env.PUBLIC_URL + '/audio/click/click.mp3'),
  'banana': new Audio(process.env.PUBLIC_URL + '/audio/fruits/banana.mp3'),
  'strawberry': new Audio(process.env.PUBLIC_URL + '/audio/fruits/strawberry.mp3'),
  'kiwi': new Audio(process.env.PUBLIC_URL + '/audio/fruits/kiwi.mp3'),
  'peach': new Audio(process.env.PUBLIC_URL + '/audio/fruits/peach.mp3'),
  'orange': new Audio(process.env.PUBLIC_URL + '/audio/fruits/orange.mp3'),
  'pear': new Audio(process.env.PUBLIC_URL + '/audio/fruits/pear.mp3'),
  'lemon': new Audio(process.env.PUBLIC_URL + '/audio/fruits/lemon.mp3'),
  'plum': new Audio(process.env.PUBLIC_URL + '/audio/fruits/plum.mp3'),
  'apple': new Audio(process.env.PUBLIC_URL + '/audio/fruits/apple.mp3'),
  'pineapple': new Audio(process.env.PUBLIC_URL + '/audio/fruits/pineapple.mp3'),
  'cherry': new Audio(process.env.PUBLIC_URL + '/audio/fruits/cherry.mp3'),
  'pomegranate': new Audio(process.env.PUBLIC_URL + '/audio/fruits/pomegranate.mp3'),
};

export const play = (sound: string) => {
  Object.keys(Audios).forEach((audio) => {
    if (Audios[audio].currentTime > 0) {
      Audios[audio].pause();
      Audios[audio].currentTime = 0;
    }
  });
  void Audios[sound].play();
};
