<!-- 
  Overlay that appears on redirection to a learning site.
 -->
 <script>
    import { fade } from "svelte/transition";
    export let gotoOriginTab;
  </script>
  
    <div
      id="aiki-overlay"
      transition:fade={{ delay: 0, duration: 200 }}>
      <div id="aiki-wrapper">
        
        <div id="aiki-header">
          <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
          <h5 id="aiki-h5">Aiki<sup>3</sup></h5>
        </div>
        <button
          id="aiki-button"
          on:click={gotoOriginTab}
        >
          Continue
        </button>
      </div>
    </div>
  
  <style>
    #aiki-overlay {
      top: 0 !important;
      left: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background-color: rgb(128, 128, 128) !important;
      position: fixed !important;
      z-index: 9001 !important;
    }
  
    #aiki-wrapper {
      display: flex !important;
      flex-direction: row !important;
      width: fit-content !important;
      position: fixed !important;
      top: 40% !important;
      left: calc(50% - 150px) !important;
      justify-items: center !important;
      align-items: center !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
    }
  
    #aiki-img {
      height: 4vh !important;
      padding: 5px !important;
      background-color: #282c34 !important;
      border-radius: 15px 0px 0px 15px !important;
      border: 2px solid #282c34 !important;
    }
  
    #aiki-p {
      display: flex !important;
      align-items: center !important;
      height: 4vh !important;
      line-height: 4vh !important;
      padding: 5px !important;
      background-color: #ffffff !important;
      border-radius: 0px 15px 15px 0px !important;
      border-left-style: none !important;
      border: 2px solid #aaaaaa !important;
      font-size: 16px !important;
      font-family: "Lato", sans-serif !important;
      text-align: center !important;
      margin: 0 !important;
      color: #444444 !important;
    }

    #aiki-button {
    /* width: 95% !important; */
    max-width: 95% !important;
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

  </style>
  