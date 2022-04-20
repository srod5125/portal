<script>
import { each, loop_guard } from "svelte/internal";
import Letter from "./Letter.svelte";

    let header = "PORTFOLIO".split("")
    const colorArr = [0,21,51,98,146,178,222,263,296]
    //`transform: scale(${t})`
</script>



<ul>
    {#each header as letter,i}
        <Letter character={letter} colorVal={colorArr[i]}></Letter>
    {/each}
</ul>

<style>
	ul {
        display: flex;
		justify-content: center;

        /*margin-bottom: 4rem;*/
    }
</style>