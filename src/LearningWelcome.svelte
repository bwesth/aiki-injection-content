<!-- 
  Overlay that appears on redirection to a learning site.
 -->
<script>
  import { fade } from "svelte/transition";

  export let welcomeVisible;

  let render = true;
  const ref = setTimeout(() => (render = false), 2000);

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  function randomQuote() {
    let index = random(0, 6);
    return quotes[index];
  }

  const quotes = [
    "Let's do something productive! 😊",
    "Time to learn some Python! 🖥️",
    "Time for some more learning! 👓",
    "Let's earn some break time! ⏲️",
    "That's right, it's Python time! 🐍",
    "Let's get some coding done! 🤖",
    "Python won't teach itself! 👩‍🏫",
  ];

  let quote = randomQuote();
</script>

{#if render}
  <div
    on:click={() => welcomeVisible = false}
    id="aiki-overlay"
    transition:fade={{ delay: 0, duration: 200 }}
  >
    <div id="aiki-wrapper">
      <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
      <p id="aiki-p">{quote}</p>
    </div>
  </div>
{/if}

<style>
  #aiki-overlay {
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background-color: rgba(128, 128, 128, 0.3) !important;
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
</style>
