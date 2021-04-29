<!-- 
  Overlay that appears on redirection to a learning site.
 -->
<script>
  import { fade } from 'svelte/transition';

  export let removeGreeting;

  let render = true;
  const ref = setTimeout(() => render = false, 90000);

  //Small helper function that improves Math.floor functionality.
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  //Picks a random quote for us.
  function randomQuote() {
    let index = random(0,6);
    return quotes[index];
  }

  //Some nice little quotes to add to our overlay!
  const quotes = [
    "Let's do something productive! 😊",
    "Time to learn some Python! 🖥️",
    "Time for some more learning! 👓",
    "Let's earn some break time! ⏲️",
    "That's right, it's Python time! 🐍",
    "Let's get some coding done! 🤖",
    "Python won't teach itself! 👩‍🏫"
  ];

  //Picks a random quote whenever the overlay is loaded.
  let quote = randomQuote();
</script>

{#if render}
<div on:click={removeGreeting} class="aiki-overlay" transition:fade="{{delay: 0, duration: 1000}}">
  <div class="aiki-wrapper">
    <img src="images/AikiLogo.png" alt="Aiki Logo"/>
    <p>{quote}</p>
  </div>
</div>
{/if}

<style>
  .aiki-overlay {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.3);
    position: fixed;
    z-index: 9001;
  }

  .aiki-wrapper {
    display: flex;
    flex-direction: row;
    width: fit-content;
    position: fixed;
    top: 40%;
    left: calc(50% - 150px);
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    box-shadow:  rgba(128, 128, 128, 0.3);
  }

  img {
    height: 1.5em;
    padding: 5px;
    background-color:  #282C34;
    border-radius: 15px 0px 0px 15px;
    border: 2px solid  #282C34;
  }

  p {
    height: 24px;
    line-height: 24px;
    padding: 5px;
    background-color: #FFFFFF;
    border-radius: 0px 15px 15px 0px;
    border-left-style: none;
    border: 2px solid #AAAAAA;
    font-size: 14px;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin: 0;
    color: #444444;
  }
</style>
