const countDivs = document.querySelectorAll('.count');
const targets = Array.from(document.querySelectorAll('.counter-item')).map(item => parseInt(item.getAttribute('data-target')));

let counts = Array.from({ length: countDivs.length }, () => 0);
const incrementDelay = 10; 
function startIncrement() {
  for (let i = 0; i < countDivs.length; i++) {
    setInterval(() => {
      if (counts[i] < targets[i]) {
        counts[i]++;
        countDivs[i].textContent = counts[i];
      }
    });
  }
}


startIncrement();
