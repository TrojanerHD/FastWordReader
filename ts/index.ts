window.onload = onLoad;

let text: TextProcessing;
let speedInput: HTMLInputElement;
let pauseInput: HTMLInputElement;
function onLoad(): void {
  text = new TextProcessing();
  (document.querySelector("input#start") as HTMLInputElement).onclick = text.start.bind(text);
  speedInput = (document.querySelector('input#speed') as HTMLInputElement);
  speedInput.onchange = speedChange;
  speedChange();
  pauseInput = (document.querySelector('input#pause') as HTMLInputElement);
  pauseInput.onclick = pauseClick;
}

function speedChange(): void {
  text._lpm = Number(speedInput.value);
  (document.querySelector('div#speed-desc') as HTMLDivElement).innerHTML = speedInput.value;
}

function pauseClick(): void {
  if (text._pause) {
    pauseInput.value = 'Pause';
    text._pause = false;
    text.nextWord();
    return;
  }
  pauseInput.value = 'Continue';
  text._pause = true;
}
