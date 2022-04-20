<script>
import { each } from "svelte/internal";

//import Hoverable from './Hoverable.svelte';
import { slide } from "svelte/transition";
import {currentId} from "./stores.js"

    export let id = 0;
    export let label = "X";
    export let description = "xxx";
    export let linkList = [];
    //export let isTop = false;
    //export let isBottom = false;

    let clickOnce = false;

    const onHit = ()=>{
        clickOnce = ($currentId != id) || ($currentId==id && !clickOnce)
        $currentId = id;
        //embolden text or change color
    }
</script>

<div on:click={onHit} class="face">
    <p>{label}</p>
</div>
{#if $currentId==id && clickOnce}
    <div class="boxContainer" transition:slide>
        <div class="sideL"></div>
        <div  class="boxInner"> 
            <div class="inner">
                <p>{description}</p>
            </div>
            <div class="container">
                {#each linkList as link}
                    <div class="name">{link.name}</div>
                    <div class="projDesc">{link.projectDescription}</div>
                {/each}
            </div>
        </div>
        <div class="sideR"></div>
    </div>
{/if} 

<style>
    :root{
        --size:50rem;
    }
    .face {
        border:1px solid;
        border-color: black;

        background-color: white;

        text-align: center;
    }
    .inner {
        border: 1px solid;

        margin-top: 0%;
    }
    .container {
        display: grid;
        grid-template-columns: 25% repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 14px;
        grid-row-gap: 0px;

        background-color: gray;

    }

    .name { 
        grid-area: 1 / 1 / 2 / 2;

        border-right: 1px solid;
        border-left: 1px solid;
        border-bottom: 1px solid;

        background-color: white;
    }
    .projDesc { 
        grid-area: 1 / 2 / 2 / 6;

        border-left: 1px solid;
        border-right: 1px solid;
        border-bottom: 1px solid;

        background-color: white;
     }

     .boxContainer {
        display: grid;
        grid-template-columns: 3% repeat(3, 1fr) 3%;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .boxInner { grid-area: 1 / 2 / 2 / 5; }

    /* sides of boxinner */
    .sideL { 
        grid-area: 1 / 1 / 2 / 2; 
        background-color: gray;
    }
    .sideR { 
        grid-area: 1 / 5 / 2 / 6;
        background-color: gray;
    }

    /* top, right, bottom, left */

</style>