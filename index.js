let jsDrummer = (() => {
  let init = () => {
    let keyboxes, playKeyHandler, transitionEndHandler;

    playKeyHandler = (evt) => {
      evt.preventDefault();
      const key = evt.keyCode,
            audio = document.querySelector(`audio[data-key="${key}"]`),
            keyBox = document.querySelector(`div[data-key="${key}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      keyBox.classList.add('playing');
    };

    transitionEndHandler = (evt) => {
      const transitionProperty = evt.propertyName,
            target = evt.target;
      if(transitionProperty !== "transform") return;
      target.classList.remove('playing');
    };

    keyboxes = document.querySelectorAll("div[data-key]");
    keyboxes.forEach((key) => {
      key.addEventListener('transitionend', transitionEndHandler);
    });
    window.addEventListener('keydown', playKeyHandler);
  };

  return {
    init
  };

})();

window.onload = jsDrummer.init();
