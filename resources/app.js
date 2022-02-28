const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempoText');
const decreaseBPMButton = document.querySelector('.decreaseBPM');
const increaseBPMButton = document.querySelector('.increaseBPM');
const tempoSlider = document.querySelector('.slider');
const tempoStopButton = document.querySelector('.startStop');
const subBeat = document.querySelector('.subBeat');
const addBeat = document.querySelector('.addBeat');
const measureCount = document.querySelector('.measureCount');

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = 'Fast';

decreaseBPMButton.addEventListener('click', () => {
  bpm--;
  validTempo();
  updateMetronome();
});

increaseBPMButton.addEventListener('click', () => {
  bpm++;
  validTempo();
  updateMetronome();
});

tempoSlider.addEventListener('input', () => {
  bpm = tempoSlider.value;
  validTempo();
  updateMetronome();
});

subBeat.addEventListener('click', () => {
  if (beatsPerMeasure <= 2) {
    return;
  }

  beatsPerMeasure--;
  measureCount.textContent = beatsPerMeasure;
});

addBeat.addEventListener('click', () => {
  if (beatsPerMeasure >= 12) {
    return;
  }

  beatsPerMeasure++;
  measureCount.textContent = beatsPerMeasure;
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;

  if (bpm <= 40) { tempoTextString = "Really Slow" };
  if (bpm > 40 && bpm < 60) { tempoTextString = "Slow" };
  if (bpm > 60 && bpm < 100) { tempoTextString = "Regular" };
  if (bpm > 100 && bpm < 160) { tempoTextString = "Fast" };
  if (bpm > 160 && bpm < 200) { tempoTextString = "Really Fast" };
  if (bpm > 200 && bpm <= 280) { tempoTextString = "Shred" };

  tempoText.textContent = tempoTextString;
}

function validTempo() {
  if (bpm <= 20 || bpm >= 280) {
    return;
  }
}

function validTimeSig() {
  if (beatsPerMeasure <= 2 || beatsPerMeasure >= 12) {
    return;
  }
}
