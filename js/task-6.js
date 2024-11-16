function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.querySelector('input');
const createButtonRef = controlsRef.querySelector('[data-create]');
const destroyButtonRef = controlsRef.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainerRef.innerHTML = '';
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}

createButtonRef.addEventListener('click', () => {
  const amount = Number(inputRef.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  inputRef.value = '';
});

destroyButtonRef.addEventListener('click', destroyBoxes);
