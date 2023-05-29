const Jimp = require("jimp");

const resize = (avatarPath) => {
  Jimp.read(avatarPath)
    .then((image) => {
      return image.resize(250, 250).write(avatarPath);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { resize };
