import Loader from './Layout.svelte';
import App from './fotter.svelte';
import Baby from './baby.svelte';
import ASstro from './astro.svelte';

// Mounting components to their respective divs
const app = new App({
  target: document.getElementById('app')
});

const loader = new Loader({
  target: document.getElementById('app2')
});

const babyApp = new Baby({
  target: document.getElementById('app0')
});

const astroApp = new ASstro({
  target: document.getElementById('app3')
});

// Function to show the div when a button is clicked
function showDiv(divId: string) {
  // Show all divs
  const divs = ['app0', 'app2', 'app', 'app3'];
  divs.forEach(div => {
    const element = document.getElementById(div);
    if (element) {
      element.classList.add('hidden'); // Hide all divs
    }
  });

  // Show the selected div
  const selectedDiv = document.getElementById(divId);
  if (selectedDiv) {
    selectedDiv.classList.remove('hidden');
  }
}

// Example: Show app0 on load
showDiv('app0');
