import { subscribe } from 'svelte/internal';
import { writable } from 'svelte/store';

//show for passing information between cabinent and drawer

/*
const createShow = () =>{
    const { subscribe, set } = writable(0);
    
    return {
        subscribe,
        setTo:(x)=>set(x)
    }
}*/

export const currentId = writable(-1);