let currentVideo = 3;

const next = () => {
  if (currentVideo < 10) currentVideo++;
  else currentVideo = 1;
  updateVideo();
};

const previous = () => {
  if (currentVideo > 1) currentVideo--;
  else currentVideo = 10;
  updateVideo();
};

const updateVideo = () => {
  document.getElementById("video-id").src = `./assets/videos/${currentVideo}.mp4`;
};
