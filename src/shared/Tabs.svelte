<script>
    import { createEventDispatcher }from 'svelte';
    let dispatcher = createEventDispatcher();
    export let items;
    export let activeItem;

    
   
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={()=> dispatcher('tabChange', item) }>
                <div class:activeTab="{activeItem===item}">{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px ;
    }
    .activeTab {
        color:#d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 9px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        font-size: 18px;
        margin: 0px 16px;
        color: #555;
        cursor: pointer;
    }
</style>