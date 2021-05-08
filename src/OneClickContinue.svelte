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

<div id="aiki-overlay" transition:fade={{ delay: 0, duration: 200 }}>
  <div id="aiki-header">
    <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
    <h5 id="aiki-h5">Aiki<sup>3</sup></h5>
    <div id="aiki-close-container" on:click={close}>
      <div id="aiki-leftright" />
      <div id="aiki-rightleft" />
    </div>
  </div>
  <button id="aiki-button" disabled={!canContinue} on:click={gotoOrigin}
    ><p id="aiki-p">Continue</p></button
  >
</div>

<style>
  #aiki-overlay {
    border-radius: 10px;
    flex-direction: column;
    top: 1em;
    right: 1em;
    height: 8vh;
    width: 16vh;
    background-color: #282c34;
    position: fixed;
    z-index: 9001;
    display: flex;
    align-items: flex-end;
    padding-top: 3px;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3);
    border: 1px solid #6c757d;
  }

  #aiki-h5 {
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    margin: 0 auto;
  }

  #aiki-button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0 0 9px 9px;
    display: flex;
    justify-content: center;
    z-index: 9001;
    background-color: #28a745;
    border-color: #28a745;
    border: 1px solid transparent;
  }

  #aiki-button:hover {
    background-color: #208934;
    border-color: #208934;
  }

  #aiki-button:disabled {
    background-color: #6c757d;
    border-color: #6c757d;
  }

  #aiki-button:disabled:hover {
    background-color: #6c757d;
    border-color: #6c757d;
  }

  #aiki-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  #aiki-img {
    margin-left: 3px;
    width: 16px;
    height: 16px;
    background-color: #282c34;
    border-radius: 5px;
    border: 2px solid #282c34;
  }

  #aiki-p {
    display: flex;
    align-items: center;
    height: 4vh;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    margin: 0;
    color: #ffffff;
    font-weight: 400;
  }

  /* Rules for the close button */
  #aiki-close-container {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    z-index: 9999;
    margin-right: 3px;
  }

  #aiki-leftright {
    margin-top: 8px;
    height: 4px;
    width: 16px;
    position: absolute;
    background-color: grey;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
  }

  #aiki-rightleft {
    margin-top: 8px;
    height: 4px;
    width: 16px;
    position: absolute;
    background-color: grey;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all 0.3s ease-in;
  }

  #aiki-close-container:hover #aiki-leftright {
    transform: rotate(-45deg);
    background-color: #dc3545;
  }
  #aiki-close-container:hover #aiki-rightleft {
    transform: rotate(45deg);
    background-color: #dc3545;
  }
</style>
