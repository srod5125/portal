<script>
import Hoverable from './Hoverable.svelte';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { interpolateLab } from 'd3-interpolate';

    export let character = "X"
    export var colorVal = 0

    
    let color = "hsl("+colorVal.toString()+", 100%, 50%)"
    let noColor = "hsl("+colorVal.toString()+", 100%, 100%)"
    //regex on noColor

    let changeColor=tweened(noColor, 
        {
            duration: 3000,
            easing: cubicOut,
            interpolate: interpolateLab
        });

</script>


<Hoverable  on:isHovering={()=>changeColor.set(color)} 
on:isNotHovering={()=>changeColor.set(noColor)}> 
    <div style="background-color:{$changeColor}">
            {character}
    </div>
</Hoverable>


<style>
div {
  height: 50px;
  width: 50px;
  
  display: flex;
  align-items:center;
  justify-content:center;
}
</style>