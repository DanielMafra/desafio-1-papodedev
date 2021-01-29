function changeColor(color) {
  switch (color) {
    case 'green':
      document.getElementById('shoes-img').classList.add('animation');
      setTimeout(function () {
        document.getElementById('shoes-img').src = "assets/shoes-green.png";
      }, 600);
      setTimeout(function () {
        document.getElementById('shoes-img').classList.remove('animation');
      }, 800);
      break;
    case 'red':
      document.getElementById('shoes-img').classList.add('animation');
      setTimeout(function () {
        document.getElementById('shoes-img').src = "assets/shoes-red.png";
      }, 600);
      setTimeout(function () {
        document.getElementById('shoes-img').classList.remove('animation');
      }, 800);
      break;
    case 'blue':
      document.getElementById('shoes-img').classList.add('animation');
      setTimeout(function () {
        document.getElementById('shoes-img').src = "assets/shoes-blue.png";
      }, 600);
      setTimeout(function () {
        document.getElementById('shoes-img').classList.remove('animation');
      }, 800);
      break;
  }
}