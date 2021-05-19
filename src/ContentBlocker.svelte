<!-- 
  Overlay that appears on redirection to a learning site.
 -->
<script>
  import { fade } from "svelte/transition";
  export let gotoOriginTab;
</script>

<div id="aiki-overlay" transition:fade={{ delay: 0, duration: 200 }}>
  <div id="aiki-textbox">
    <div id="aiki-header">
      <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
      <h5 id="aiki-h5">Aiki<sup>3</sup></h5>
    </div>
    <p id="aiki-p">You can look at twitter when you're done learning</p>
    <button id="aiki-button" on:click={gotoOriginTab}> Keep Learning </button>
  </div>
</div>
<!-- HELP MEESEEKS -->
<style>
  /* * {
    border: 1px solid red;
  } */

  #aiki-p {
    margin: 5px 0px !important;
    font-family: "Lato", sans-serif;
  }

  #aiki-overlay {
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background-color: #1f2933 !important;
    position: fixed !important;
    z-index: 9001 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #aiki-textbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
    background-color: #323f4b !important;
    padding: 10px;
    border-radius: 10px;
  }

  #aiki-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
  }

  #aiki-h5 {
    margin: 0;
    display: inline;
  }

  #aiki-img {
    height: 20px;
    width: 20px;
    display: inline;
    margin-right: 5px;
  }

  #aiki-button {
    /* width: 95% !important; */
    white-space: normal !important;
    max-width: 90% !important;
    margin: 5px 0px 0px 0px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    z-index: 9001 !important;
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    border: 1px solid transparent !important;
    /* The below CSS is trying to emulate Bootstrap buttons */
    font-weight: 400 !important;
    color: #ffffff !important;
    text-align: center !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
    -ms-touch-action: manipulation !important;
    touch-action: manipulation !important;
    cursor: pointer !important;
    background-image: none !important;
    padding: 6px 12px !important;
    font-size: 14px !important;
    line-height: 1.42857143 !important;
    border-radius: 4px !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  #aiki-button:hover {
    background-color: #208934 !important;
    border-color: #208934 !important;
  }
</style>
