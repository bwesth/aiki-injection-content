<!-- 
  Overlay that appears on redirection to a learning site.
 -->
<script>
  import { fade } from "svelte/transition";
  export let gotoOriginTab;
</script>

<div
  class="aiki-overlay"
  style="top: 0 !important;
left: 0 !important;
height: 100% !important;
width: 100% !important;
background-color: #1f2933 !important;
position: fixed !important;
z-index: 9001 !important;
display: flex !important;
justify-content: center !important;
align-items: center !important;"
  transition:fade={{ delay: 0, duration: 200 }}
>
  <div
    class="aiki-textbox"
    style="display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  color: #ffffff !important;
  background-color: #323f4b !important;
  padding: 12px !important;
  border-radius: 10px !important;"
  >
    <div
      class="aiki-header"
      style="display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: 100% !important;
    font-weight: 400 !important;
    font-family: 'Roboto', sans-serif !important;
    font-size: 14px !important;
    color: #ffffff !important;
    background-color: #323f4b !important;"
    >
      <img
        class="aiki-img"
        src="images/AikiLogo.png"
        alt="Aiki Logo"
        style="height: 20px;
      width: 20px;
      display: inline;
      margin-right: 5px;
      background-color: #323f4b !important;"
      />
      <h5
        class="aiki-h5"
        style="font-size: 16px !important;
      font-weight: bolder !important;
      font-family: 'Roboto', sans-serif !important;
      color: #ffffff !important;
      margin: 0 !important;
      display: inline !important;
      background-color: #323f4b !important;"
      >
        Aiki
        <!-- <sup style="vertical-align:super; font-size: smaller;">3</sup> -->
      </h5>
    </div>
    <p
      class="aiki-p"
      style="margin: 5px 0px !important;
    font-weight: 400 !important;
    font-family: 'Lato', sans-serif !important;
    font-size: 14px !important;
    color: #ffffff !important;
    background-color: #323f4b !important;"
    >
      You can procrastinate when you're done learning
    </p>
    <button
      class="aiki-button"
      style="white-space: normal !important;
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
    font-weight: 400 !important;
    font-family: 'Roboto', sans-serif !important;
    font-size: 14px !important;
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
    user-select: none !important;"
      on:click={gotoOriginTab}
    >
      Keep Learning
    </button>
  </div>
</div>

<style>
  /* .aiki-p {
    margin: 5px 0px !important;
    font-weight: 400 !important;
    font-family: "Lato", sans-serif !important;
    font-size: 14px !important;
    color: #ffffff !important;
    background-color: #323f4b !important;
  }

  .aiki-overlay {
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background-color: #1f2933 !important;
    position: fixed !important;
    z-index: 9001 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .aiki-textbox {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
    color: #ffffff !important;
    background-color: #323f4b !important;
    padding: 12px !important;
    border-radius: 10px !important;
  }

  .aiki-header {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    height: 100% !important;
    font-weight: 400 !important;
    font-family: "Roboto", sans-serif !important;
    font-size: 14px !important;
    color: #ffffff !important;
    background-color: #323f4b !important;
  }

  .aiki-h5 {
    font-size: 16px !important;
    font-weight: bolder !important;
    font-family: "Roboto", sans-serif !important;
    color: #ffffff !important;
    margin: 0 !important;
    display: inline !important;
    background-color: #323f4b !important;
  }

  .aiki-img {
    height: 20px;
    width: 20px;
    display: inline;
    margin-right: 5px;
    background-color: #323f4b !important;
  }

  .aiki-button {
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
    font-weight: 400 !important;
    font-family: "Roboto", sans-serif !important;
    font-size: 14px !important;
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
  } */

  .aiki-button:hover {
    background-color: #208934 !important;
    border-color: #208934 !important;
  }
</style>
