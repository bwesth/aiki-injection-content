<script>
  import { fade } from 'svelte/transition';

  export let removeGreeting;

  let render = true;
  const ref = setTimeout(() => render = false, 1500)
</script>

{#if render}
<div on:click={removeGreeting} class="aiki-overlay" transition:fade="{{delay: 0, duration: 1000}}">
  <div class="aiki-wrapper">
    <h1>Lets do something productive! (Insert smiley)</h1>>
  </div>
</div>
{/if}

<style>
  .aiki-overlay {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.281);
    position: fixed;
    z-index: 9001;
  }

  .aiki-wrapper {
    display: flex;
    flex-direction: column;
    width: 200px;
    position: fixed;
    top: 40%;
    left: calc(50% - 100px);
    background-color: #282c34;
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 10px 10px 5px grey;
  }

  hr {
    width: 90%;
    color: grey;
  }

  h1,
  p,
  small {
    text-align: center;
    margin: 0;
    color: #fff;
  }

  button {
    width: 90%;
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    border-radius: 15px;
  }
</style>
