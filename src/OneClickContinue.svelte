<!-- 

-->
<script>
  import { fade } from "svelte/transition";

  export let gotoOrigin;
  export let continueVisible;
  export let canContinue;
  export let endInjection;

  function close() {
    continueVisible = false;
    endInjection();
  }
</script>

<div class="aiki-overlay" transition:fade={{ delay: 0, duration: 200 }}>
  <div class="aiki-header">
    <img class="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
    <h5>Aiki<sup>3</sup></h5>
    <div class="close-container" on:click={close}>
      <div class="leftright" />
      <div class="rightleft" />
    </div>
  </div>
  <button disabled={!canContinue} on:click={gotoOrigin}
    ><p class="aiki-p">Continue</p></button
  >
</div>

<style>
  .aiki-overlay {
    border-radius: 10px;
    flex-direction: column;
    top: 1em;
    right: 1em;
    height: 62px;
    width: 8em;
    background-color: rgb(211, 211, 211);
    position: fixed;
    z-index: 9000;
    display: flex;
    align-items: flex-end;
    padding-top: 4px;
  }

  button {
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    z-index: 9001;
  }

  .aiki-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  h5 {
    margin: 0;
    margin: 0 auto;
  }

  .aiki-img {
    margin-left: 3px;
    width: 20px;
    height: 20px;
    background-color: #282c34;
    border-radius: 5px;
    border: 2px solid #282c34;
  }

  .aiki-p {
    display: flex;
    align-items: center;
    height: 4vh;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin: 0;
    color: #444444;
  }

  .close-container {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    z-index: 9999;
    margin-right: 3px;
  }

  .leftright {
    margin-top: 8px;
    height: 4px;
    width: 20px;
    position: absolute;
    background-color: #f4a259;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
  }

  .rightleft {
    margin-top: 8px;
    height: 4px;
    width: 20px;
    position: absolute;
    background-color: #f4a259;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all 0.3s ease-in;
  }

  .close-container:hover .leftright {
    transform: rotate(-45deg);
    background-color: #f25c66;
  }
  .close-container:hover .rightleft {
    transform: rotate(45deg);
    background-color: #f25c66;
  }
</style>
