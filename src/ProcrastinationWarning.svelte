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

  //Small helper function that improves Math.floor functionality.
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  //Picks a random quote for us.
  function randomQuote() {
    let index = random(0, 7);
    return quotes[index];
  }

  //Some nice little quotes to add to our overlay!
  const quotes = [
    "Time's up!",
    "Back to work!",
    "Time to work!",
    "ENOUGH",
    "S̵̝̲̫̓̔́̅̆̿̕Ȩ̷̧̛̥̜̺̳̼̫͇͖̯͎̮̞̋̒̓̿̈́̀̑͒͑̂͛V̵̢͙̜̰͔́̑̔̿͒E̶̝̣̥̗͍̦̳̤̖͎̼͋͌̓̈́̂͜N̶͓͎̤̆́̄̾͋̋̂̀͆͗̓͊̚ ̸̡̢͇̤̖̫͓͕̫̠̺̺̠̤̳̰̐̑̀̂̅̈́͛̈́͋̏͝Ḋ̶̨̜̙̹̟̘͙̲̼̖̰̳̲̻͓̎̌̕͘Á̷͓̳͔͈Y̶̡̧̳̞̜̫̺̐͜S̵̢̫͉̭̮̣̯͙̙̙̖͖̱̬̀͆̒͂͝",
    "C̶̨̛̬͉̺̤͑͗̓̍͋͂̉̋̒͘H̴̛̺̬̜͚̥͉́̎̂̂͛̎̾̈́̋̏̿̃͗̎͒͊̐͌̃̐͗͐̀͛̌͐̅͌͑̐͂͋̅̕͘͠Ą̴̛̥͙̗̩̘͙͓͙͎̯̹̞̞͙̮̻͚̼͚̻̻͙͇̀͐̋̇͋̊̌̑̃̇͌͊̈́̔͋̈́̈́͌͂̄̔͋̈̓̃͘͜͠Ơ̴̡̢̡̨̢̛̩̖̬͎̯̻̖̳̟̯̫͎͕̹̳͈̪͙̙͉̝͉͔͙̫̯͇̬̩͇̹͂͑͊̀̀͐̎̔̍̇̿̓̈̔̃̑̎́̏͛̀̈́̾̈́͊̃̉̈̇̚̕͘ͅS̸̢̛͇͙̙̦̞̝̜͉̮̩̞̤̺̼̺͍̖͖̫̠̜̹̞̦͎̗͈̗͐͌́̀̑͗͑͊͆̀͆̍́́̂̒̓̀͑̽̾͒͗͂͗̋̚̚͘̚̚͝ͅ",
    "I HAVE NO EYES",
  ];

  //Picks a random quote whenever the overlay is loaded.
  let quote = randomQuote();
</script>

<div id="aiki-overlay">
  <div id="aiki-wrapper">
    <div id="aiki-header-wrapper">
      <img id="aiki-img" src="images/AikiLogo.png" alt="Aiki Logo" />
      <h1 id="aiki-h1">{quote}</h1>
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
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.281);
    position: fixed;
    z-index: 9001; /*MEME*/
  }

  #aiki-wrapper {
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    position: fixed;
    top: 40%;
    left: calc(50% - 100px);
  }

  #aiki-content-wrapper {
    border-radius: 0px 0px 15px 15px;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 0px 0px 15px 15px;
    border: 2px solid #aaaaaa;
  }

  #aiki-header-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: #282c34;
    border-radius: 15px 15px 0px 0px;
    border: 2px solid #282c34;
    padding: 3px 0px;
  }

  #aiki-img {
    display: flex;
    height: 1.2em;
    padding: 5px;
  }

  #aiki-h1 {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    text-align: center;
    padding: 5px 0px;
    margin: 0;
  }

  #aiki-h2 {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #212121;
    text-align: center;
    padding: 10px 0px;
    margin: 0;
  }

  #aiki-p {
    display: flex;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }

  #aiki-small {
    display: flex;
    font-size: 10px;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }

  #aiki-button {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: 90%;
    color: #ffffff;
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 5px;
    transition-duration: 0.4s;
  }

  #aiki-button:hover {
    background-color: #0068d6;
  }
</style>
