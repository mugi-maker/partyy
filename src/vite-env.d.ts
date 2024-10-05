<script>
	import { readable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	// Props
	export let countFrom = 0;

	const dispatch = createEventDispatcher();

	// Reactive to account for changes in countFrom:
	$: endDate = (function(secs) {
		const e = Date.now() + secs * 1000;
		return new Date(e);
	})(countFrom);
	
	$: remaining = readable(countFrom, function start(set) {
		const interval = setInterval(() => {
			let r = Math.round((endDate - new Date()) / 1000);
			r = Math.max(r, 0);
			set(r);
			if (r <= 0) {
				clearInterval(interval);
			}
		}, 1000);
		
		return function stop() {
		clearInterval(interval);
		};
	});
	
	$: hh = Math.floor($remaining / 3600);
	$: mm = Math.floor(($remaining - hh * 3600) / 60);
	$: ss = $remaining - hh * 3600 - mm * 60;

	$: if ($remaining === 0) {
		dispatch('timesup');
	}

	// Animation-related.
	const duration = 180;
	const delay = 90;
	
	function f(value) {
		if (value < 10) {
			return `0${value}`;
		}
		return value.toString();
	}
</script>

<span class="timer {$$props.class}">
	<span class="value">
		{#key hh}
			<span class="value" in:fly={{ delay, duration, y: '1em'}} out:fly={{ duration, y: '-1em'}}>{f(hh)}</span>
		{/key}
	</span>:<span class="value">
		{#key mm}
			<span class="value" in:fly={{ delay, duration, y: '1em'}} out:fly={{ duration, y: '-1em'}}>{f(mm)}</span>
		{/key}
	</span>:<span class="value">
		{#key ss}
			<span class="value" in:fly={{ delay, duration, y: '1em'}} out:fly={{ duration, y: '-1em'}}>{f(ss)}</span>
		{/key}
	</span>
</span>

<style>
	span.timer {
		padding: 0 0.2em;
	}
	span.value {
		display: inline-flex;
		flex-flow: column;
		height: 1em;
	}
	span.value > span {
		display: inline-block;
	}
</style>
