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
<div on:click={removeGreeting} class="overlay" transition:fade="{{delay: 0, duration: 1000}}">
  <div class="wrapper">
    <img src="images/AikiLogo.png" alt="Aiki Logo"/>
    <p>{quote}</p>
  </div>
</div>
{/if}

<style>
  .overlay {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.3);
    position: fixed;
    z-index: 9001;
  }

  .wrapper {
    background-color: var(--backgroundColor);
    border: 2px solid var(--borderColor);
    display: flex;
    flex-direction: row;
    width: 250px;
    position: fixed;
    top: 40%;
    left: calc(50% - 150px);
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 2px 2px 2px var(--shadowColor);
  }

  img {
    height: 1.5em;
    padding: 5px;
  }

  p {
    font-size: var(--fontSize);
    font-family: var(--fontContent);
    padding: 10px 0px;
    text-align: center;
    margin: 0;
    color: var(--textColor);
  }
</style>
