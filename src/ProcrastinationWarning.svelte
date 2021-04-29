<!-- 
  Overlay that appears during a procrastination session once the earned procrastination time has run out.
 -->
<script>
  export let removeInfowarning;
  export let timer;
  let seconds = Math.round(timer.time / 1000);
  setInterval(() => {
    seconds = Math.round(timer.time / 1000);
  }, 100);

  timer.start();
</script>

<div class="aiki-overlay">
  <div class="aiki-wrapper">
    <div class="aiki-header-wrapper">
      <img src="images/AikiLogo.png" alt="Aiki Logo"/>
      <h6>Time's up!</h6>
    </div>
    <h5>{seconds}</h5>
    <button
      on:click={removeInfowarning}
      on:mouseover={timer.slow}
      on:mouseout={timer.hasten}
      >
      <p>Snooze</p>
      <small>(+1 minute)</small>
    </button>
  </div>
</div>

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
    background-color:#FFFFFF;
    justify-items: center;
    align-items: center;
    border-radius: 0px 0px 15px 15px;
    border: 2px solid #AAAAAA;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3);
  }

  .aiki-header-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color:  #282C34;
    border-radius: 15px 0px 0px 15px;
    border: 2px solid  #282C34;
  }

  img {
    display: flex;
    height: 1.5em;
    padding: 5px;
  }

  h6 {
    display: flex;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: #FFFFFF;
    text-align: center;
    padding: 5px 0px;
    margin: 0;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 0;
    color: #FFFFFF;
  }

  small {
    font-size: 10px;
    text-align: center;
    margin: 0;
    color: #FFFFFF;
  }

  button {
    width: 90%;
    color: #FFFFFF;
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 5px;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: #0068d6;
  }

</style>
