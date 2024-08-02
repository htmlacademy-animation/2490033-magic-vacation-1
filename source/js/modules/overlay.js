let overlay = document.querySelector(`.js-overlay`);

function show(cb) {
  if (location.hash === `#prizes`) {
    overlay.classList.add(`show`);
    setTimeout(cb, 300);
  } else {
    overlay.classList.remove(`show`);
    cb();
  }
}

export default {
  show,
};
