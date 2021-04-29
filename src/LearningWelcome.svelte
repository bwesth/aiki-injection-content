<!-- 
  Overlay that appears on redirection to a learning site.
 -->
<script>
  import { fade } from 'svelte/transition';

  export let removeGreeting;

  let render = true;
  const ref = setTimeout(() => render = false, 10000);
</script>

{#if render}
<div on:click={removeGreeting} class="aiki-overlay" transition:fade="{{delay: 0, duration: 1000}}">
  <div class="aiki-wrapper">
    <img src="images/AikiLogo.png" alt="Aiki Logo"/>
    <p>Let's do something productive! 😊</p>
  </div>
</div>
{/if}

<style>
  .aiki-overlay {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.3);
    position: fixed;
    z-index: 9001;
  }

  .aiki-wrapper {
    background-color: var(--backgroundColor);
    border: 2px solid var(--borderColor);
    display: flex;
    flex-direction: column;
    width: 200px;
    position: fixed;
    top: 40%;
    left: calc(50% - 100px);
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 2px 2px 2px var(--shadowColor);
  }

  img {
    height: 2em;
  }

  p {
    font-size: var(--fontSize);
    font-family: var(--fontContent);
    padding: 10px 0px;
    text-align: center;
    margin: 0;
    color: var(--textColor);
  }

</style>
