<script>
import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let spacing = false;
	let hovering = false;

	function enter() {
		hovering = true;
        dispatch('isHovering', {
			text: 'mouse over element',
            hoverState: true 
		});
	}

	function leave() {
		hovering = false;
        dispatch('isNotHovering', {
			text: 'mouse not over element',
            hoverState: false
		});
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class={spacing?"spacedLR":""}>
	<slot hovering={hovering}>
        <em>no content was provided</em>
    </slot>
</div>

<style>
    .spacedLR {
        margin-left: 1%;
        margin-right: 1%;
        float: left;
    }
</style>