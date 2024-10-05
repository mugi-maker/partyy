<!-- <script>
	import Timer from 'timer.svelte';
	import { confetti } from '@neoconfetti/svelte'
	import { tick } from 'svelte';
	
	let countFrom = 0;
	let done = false;
	let countFromInput;

	const confettiOpts = {
		particleCount: 300,
		force: 1,
		particleSize: 5
	};

	async function timesUp() {
		await tick();
		done = true;
	}

	async function reset() {
		done = false;
		countFrom = 10;
		await tick();
		countFromInput?.focus();
	}
</script>

<h1>Timer</h1>

<p><label>Timer's initial count, in seconds:&nbsp;<input type="number" min="0" bind:value={countFrom} bind:this={countFromInput} /></label></p>

Wait for <span class="timer-container"><Timer class="app-timer" {countFrom} on:timesup={timesUp} />
{#if done}
	<span class="confetti" use:confetti={confettiOpts} />
{/if}
</span>
for a surprise.
<p>The quick brown fox jumps over the lazy dog.</p>
{#if done}
	<button on:click={reset}>Reset</button>
{/if}

<style>
	span.timer-container {
		position: relative;
	}
	:global(.app-timer) {
		font-family: monospace;
		font-weight: bold;
		padding: 0 0.3em;
		border-radius: 0.3em;
		font-size: larger;
		background-color: lightblue;
	}
	:global(body.dark) :global(.app-timer) {
		background-color: lightcyan;
		color: black;
	}
	span.confetti {
		position: absolute;
		left: 50%;
	}
	button {
		background-color: darkgray;
		color: white;
	}
	:global(body.dark) button {
		background-color: lightgray;
		color: black;
	}</style> -->