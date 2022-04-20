<script>
import { element, trusted } from "svelte/internal";
import { each, loop_guard } from "svelte/internal";

import {currentId} from "./stores.js"
//import { clickOutside } from "./click_outside.js";

//used to close menu
import Hoverable from "./Hoverable.svelte";

import Drawer from "./Drawer.svelte"
    //where main links will be sotred
    let handles = new Array();

    //istop is bottom, for rounded bases
    let profileBlock = {
        id:0,
        label:"Background",
        description:"pp poo poo caca"
        }
    let juvenileBlock = {
        id:1,
        label:"Juvenile Projects",
        description:"smoll pp projects",
        linkList:[{name:"XXX",projectDescription:"XXX"}]
    }
    let longtermBlock ={
        id:2,
        label:"Longterm Projects",
        description:"long term projects",
        linkList:[{name:"XXX",projectDescription:"XXX"}]
    }
    
    handles.push(profileBlock,juvenileBlock,longtermBlock);
    /*
    function outsideClick()
    {
        console.log("fires")
        $currentId=-1;
    }
    */
</script> 

<Hoverable on:isNotHovering={()=> $currentId=-1 }>
    <div class="closer"></div>
    {#each handles as handle,i}
        <Drawer {...handle} id={i}/>
    {/each}
    <div class="closer"></div>
</Hoverable>

<style>
    .closer{
        height: 4px;
        background-color: rgb(231,84,128);
    }
</style>