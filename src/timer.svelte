<script>
  import { onMount } from 'svelte';

  let targetDate = new Date('2024/12/05').getTime();
  let days = 30, hours = 2, minutes = 0, seconds = 0;
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time components
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);


    if (distance < 0) {
      clearInterval(interval);
      // Optionally, you can choose to display something else when the countdown is over
      days = 0; // Reset to 0 days or keep it as you prefer
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  }


  //#PURPLE
function log() {
  console.log("hello");
}
//#
 
  let interval;

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl" style="--value:{days};">
      {days}
    </span>
    days
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl" style="--value:{hours};">
      {hours}
    </span>
    hours
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl" style="--value:{minutes};">
      {minutes}
    </span>
    min
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl" style="--value:{seconds};">
      {seconds}
    </span>
    sec
  </div>
</div>

<style>
  /* Add your styles here */
  .countdown {
    /* Styles for countdown */
  }
</style>
