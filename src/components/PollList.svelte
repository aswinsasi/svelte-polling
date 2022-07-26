<script>
//import { onMount, onDestroy} from 'svelte';
import PollDetail from './PollDetails.svelte';
import PollStore from '../store/PollStore';
import { fade, scale, slide } from 'svelte/transition';
import { flip } from 'svelte/animate';

// simpletest way of below commented is in single line by using $PollStore dollar symbol fetch data only from PollStore

// export let polls = [];

// const unsub = PollStore.subscribe((data) => {
//     polls = data;
// });

// onMount(()=>{
//     //may be get data from store
//     console.log("component mounted")
// });

// onDestroy(()=>{
//     //unsubscribe from store
//     console.log("component destroy")
//     unsub();
// });
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{ duration:500 }}>
            <PollDetail {poll}  on:vote/>
        </div>
    {/each}
</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:20px;
    }
</style>