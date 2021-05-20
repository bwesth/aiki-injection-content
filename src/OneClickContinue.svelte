<!-- 
  Overlay that appears during a learning session to display a continue button.
  Uses svelte-moveable library: https://www.npmjs.com/package/svelte-moveable
 -->
<script>
  import { fade } from "svelte/transition";
  import Moveable from "svelte-moveable";
  import { onMount } from "svelte";

  let target;
  let frame = {
    translate: [0, 0],
    rotate: 0,
    transformOrigin: "50% 50%",
  };

  export let gotoOrigin;
  export let continueVisible;
  export let getReady;
  export let endInjection;
  let isReady = getReady();

  setInterval(() => (isReady = getReady()), 1000);

  function close() {
    continueVisible = false;
    endInjection();
  }
  onMount(() => {
    document.querySelector(".moveable-control-box").style.visibility = "hidden";
  });
</script>

<div
  bind:this={target}
  class="aiki-overlay"
  style="border-radius: 10px !important;
  flex-direction: column !important;
  top: 1em !important;
  right: 1em !important;
  height: 95px !important;
  width: 120px !important;
  background-color: #282c34 !important;
  position: fixed !important;
  z-index: 9001 !important;
  display: flex !important;
  align-items: center !important;
  padding-top: 3px !important;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
  border: 1px solid #6c757d !important;"
  transition:fade={{ delay: 0, duration: 200 }}
>
  <div
    class="aiki-header"
    style="height: 25px;
  display: flex !important;
  width: 100% !important;
  justify-content: space-between !important;
  align-items: center !important;"
  >
    <img
      class="aiki-img"
      src="images/AikiLogo.png"
      alt="Aiki Logo"
      style="margin-left: 3px !important;
    width: 16px !important;
    height: 16px !important;
    background-color: #282c34 !important;
    border-radius: 5px !important;
    border: 2px solid #282c34 !important;"
    />
    <h5
      class="aiki-h5"
      style="color: #ffffff !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    font-family: 'Roboto', sans-serif !important;
    margin: 0 auto !important;
    cursor: move !important;"
    >
      Aiki<sup style="vertical-align:super; font-size: smaller;">3</sup>
    </h5>
    <div
      class="aiki-close-container"
      style="width: 20px !important;
    height: 20px !important;
    position: relative !important;
    cursor: pointer !important;
    z-index: 9999 !important;
    margin-right: 3px !important;"
      on:click={close}
    >
      <div
        class="aiki-leftright"
        style="margin-top: 8px !important;
      height: 4px !important;
      width: 16px !important;
      position: absolute !important;
      background-color: grey !important;
      border-radius: 2px !important;
      transform: rotate(45deg) !important;
      transition: all 0.3s ease-in !important;"
      />
      <div
        class="aiki-rightleft"
        style="margin-top: 8px !important;
      height: 4px !important;
      width: 16px !important;
      position: absolute !important;
      background-color: grey !important;
      border-radius: 2px !important;
      transform: rotate(-45deg) !important;
      transition: all 0.3s ease-in !important;"
      />
    </div>
  </div>
  <button
    class="aiki-button"
    disabled={!isReady}
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
    color: #ffffff !important;
    text-align: center !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
    -ms-touch-action: manipulation !important;
    touch-action: manipulation !important;
    cursor: pointer !important;
    background-image: none !important;
    padding: 6px 12px !important;
    font-family: 'Lato', sans-serif !important;
    font-size: 14px !important;
    line-height: 1.42857143 !important;
    border-radius: 4px !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;"
    on:click={() => gotoOrigin("injected")}
  >
    Continue<br />Procrastinating
  </button>
</div>
<Moveable
  {target}
  className="moveable"
  draggable={true}
  throttleDrag={0}
  zoom={1}
  origin={true}
  on:dragStart={({ detail: e }) => {
    e.set(frame.translate);
  }}
  on:drag={({ detail: e }) => {
    frame.translate = e.beforeTranslate;
  }}
  on:render={({ detail: e }) => {
    const { translate, rotate, transformOrigin } = frame;
    e.target.style.transformOrigin = transformOrigin;
    e.target.style.transform =
      `translate(${translate[0]}px, ${translate[1]}px)` +
      ` rotate(${rotate}deg)`;
  }}
/>

<style>
  /* .aiki-overlay {
    border-radius: 10px !important;
    flex-direction: column !important;
    top: 1em !important;
    right: 1em !important;
    height: 95px !important;
    width: 120px !important;
    background-color: #282c34 !important;
    position: fixed !important;
    z-index: 9001 !important;
    display: flex !important;
    align-items: center !important;
    padding-top: 3px !important;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
    border: 1px solid #6c757d !important;
  }

  .aiki-h5 {
    color: #ffffff !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    font-family: "Roboto", sans-serif !important;
    margin: 0 auto !important;
    cursor: move !important;
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
    color: #ffffff !important;
    text-align: center !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
    -ms-touch-action: manipulation !important;
    touch-action: manipulation !important;
    cursor: pointer !important;
    background-image: none !important;
    padding: 6px 12px !important;
    font-family: "Lato", sans-serif !important;
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

  .aiki-button:disabled {
    opacity: 0.5;
    background-color: #6c757d !important;
    border-color: #6c757d !important;
    cursor: not-allowed !important;
  }

  .aiki-button:disabled:hover {
    background-color: #6c757d !important;
    border-color: #6c757d !important;
    cursor: not-allowed !important;
  }

  /* .aiki-header {
    height: 25px;
    display: flex !important;
    width: 100% !important;
    justify-content: space-between !important;
    align-items: center !important;
  }

  .aiki-img {
    margin-left: 3px !important;
    width: 16px !important;
    height: 16px !important;
    background-color: #282c34 !important;
    border-radius: 5px !important;
    border: 2px solid #282c34 !important;
  } */

  /* Rules for the close button */
  /* .aiki-close-container {
    width: 20px !important;
    height: 20px !important;
    position: relative !important;
    cursor: pointer !important;
    z-index: 9999 !important;
    margin-right: 3px !important;
  }

  .aiki-leftright {
    margin-top: 8px !important;
    height: 4px !important;
    width: 16px !important;
    position: absolute !important;
    background-color: grey !important;
    border-radius: 2px !important;
    transform: rotate(45deg) !important;
    transition: all 0.3s ease-in !important;
  }

  .aiki-rightleft {
    margin-top: 8px !important;
    height: 4px !important;
    width: 16px !important;
    position: absolute !important;
    background-color: grey !important;
    border-radius: 2px !important;
    transform: rotate(-45deg) !important;
    transition: all 0.3s ease-in !important;
  } */

  .aiki-close-container:hover .aiki-leftright {
    transform: rotate(-45deg) !important;
    background-color: #dc3545 !important;
  }
  .aiki-close-container:hover .aiki-rightleft {
    transform: rotate(45deg) !important;
    background-color: #dc3545 !important;
  }
</style>
