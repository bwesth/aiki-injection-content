<!-- 
  Overlay that appears during a procrastination session once the earned procrastination time has run out.
 -->
<script>
  export let resolve;
  export let removeInfowarning;
  export let timer;
  let seconds = Math.round(timer.time / 1000);
  setInterval(() => {
    seconds = Math.round(timer.time / 1000);
  }, 100);

  timer.start(resolve);
</script>

<div id="aiki-overlay">
  <div id="aiki-wrapper">
    <div id="aiki-header-wrapper">
      <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
      <h1 id="aiki-h1">Time's up!</h1>
    </div>

    <div id="aiki-content-wrapper">
      <h2 id="aiki-h2">{seconds}</h2>
      <button
        id="aiki-button"
        on:click={removeInfowarning}
        on:mouseover={timer.slow}
        on:mouseout={timer.hasten}
      >
        <p id="aiki-p">Snooze</p>
        <small id="aiki-small">(+1 minute)</small>
      </button>
    </div>
  </div>
</div>

<style>
  #aiki-overlay {
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background-color: rgba(128, 128, 128, 0.281) !important;
    position: fixed !important;
    z-index: 9001 !important;
  }

  #aiki-wrapper {
    display: flex !important;
    flex-direction: column !important;
    width: 10vw !important;
    height: 10vh !important;
    position: fixed !important;
    top: 40% !important;
    left: 45% !important;
  }

  #aiki-content-wrapper {
    border-radius: 0px 0px 15px 15px !important;
    background-color: #ffffff !important;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3) !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-content: center !important;
    text-align: center !important;
    border-radius: 0px 0px 15px 15px !important;
    border: 2px solid #aaaaaa !important;
  }

  #aiki-header-wrapper {
    display: flex !important;
    flex-direction: row !important;
    width: 100% !important;
    justify-content: center !important;
    background-color: #282c34 !important;
    border-radius: 15px 15px 0px 0px !important;
    border: 2px solid #282c34 !important;
    padding: 3px 0px !important;
  }

  #aiki-img {
    display: flex !important;
    height: 1.2em !important;
    padding: 5px !important;
  }

  #aiki-h1 {
    font-size: 16px !important;
    font-family: "Roboto", sans-serif !important;
    color: #ffffff !important;
    text-align: center !important;
    padding: 5px 0px !important;
    margin: 0 !important;
  }

  #aiki-h2 {
    font-size: 20px !important;
    font-family: "Roboto", sans-serif !important;
    color: #212121 !important;
    text-align: center !important;
    padding: 10px 0px !important;
    margin: 0 !important;
  }

  #aiki-p {
    display: flex !important;
    font-weight: bold !important;
    font-size: 16px !important;
    text-align: center !important;
    margin: 0 !important;
    color: #ffffff !important;
  }

  #aiki-small {
    display: flex !important;
    font-size: 12px !important;
    padding-bottom: 5px !important;
    text-align: center !important;
    margin: 0 !important;
    color: #ffffff !important;
  }

  #aiki-button {
    display: flex !important;
    flex-direction: column !important;
    align-self: center !important;
    align-items: center !important;
    width: 90% !important;
    color: #9c7c7c !important;
    background-color: #007bff !important;
    border-color: #007bff !important;
    border-radius: 5px !important;
    transition-duration: 0.4s !important;
  }

  #aiki-button:hover {
    background-color: #0068d6 !important;
  }
</style>
