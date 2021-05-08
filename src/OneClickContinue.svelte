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
    border-radius: 10px !important;
    flex-direction: column !important;
    top: 1em !important;
    right: 1em !important;
    height: 8vh !important;
    width: 16vh !important;
    background-color: #282c34 !important;
    position: fixed !important;
    z-index: 9001 !important;
    display: flex !important;
    align-items: flex-end !important;
    padding-top: 3px !important;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3) !important;
    border: 1px solid #6c757d !important;
  }

  #aiki-h5 {
    color: #ffffff !important;
    font-size: 16px !important;
    font-family: "Roboto", sans-serif !important;
    margin: 0 auto !important;
  }

  #aiki-button {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 0 9px 9px !important;
    display: flex !important;
    justify-content: center !important;
    z-index: 9001 !important;
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    border: 1px solid transparent !important;
  }

  #aiki-button:hover {
    background-color: #208934 !important;
    border-color: #208934 !important;
  }

  #aiki-button:disabled {
    background-color: #6c757d !important;
    border-color: #6c757d !important;
  }

  #aiki-button:disabled:hover {
    background-color: #6c757d !important;
    border-color: #6c757d !important;
  }

  #aiki-header {
    display: flex !important;
    width: 100% !important;
    justify-content: space-between !important;
  }

  #aiki-img {
    margin-left: 3px !important;
    width: 16px !important;
    height: 16px !important;
    background-color: #282c34 !important; 
    border-radius: 5px !important;
    border: 2px solid #282c34 !important;
  }

  #aiki-p {
    display: flex !important;
    align-items: center !important;
    height: 4vh !important;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    text-align: center !important;
    margin: 0 !important;
    color: #ffffff !important;
    font-weight: 400 !important;
  }

  /* Rules for the close button */
  #aiki-close-container {
    width: 20px !important;
    height: 20px !important;
    position: relative !important;
    cursor: pointer !important;
    z-index: 9999 !important;
    margin-right: 3px !important;
  }

  #aiki-leftright {
    margin-top: 8px !important;
    height: 4px !important;
    width: 16px !important;
    position: absolute !important;
    background-color: grey !important;
    border-radius: 2px !important;
    transform: rotate(45deg) !important;
    transition: all 0.3s ease-in !important;
  }

  #aiki-rightleft {
    margin-top: 8px !important;
    height: 4px !important;
    width: 16px !important;
    position: absolute !important;
    background-color: grey !important;
    border-radius: 2px !important;
    transform: rotate(-45deg) !important;
    transition: all 0.3s ease-in !important;
  }

  #aiki-close-container:hover #aiki-leftright {
    transform: rotate(-45deg) !important;
    background-color: #dc3545 !important;
  }
  #aiki-close-container:hover #aiki-rightleft {
    transform: rotate(45deg) !important;
    background-color: #dc3545 !important;
  }
</style>
