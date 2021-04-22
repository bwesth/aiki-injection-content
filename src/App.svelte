<script>
  export let removeInfowarning;
  let value = 5;
  let interval = setInterval(() => {
    value = value > 0 ? value - 1 : () => clearInterval(interval);
  }, 1000);
</script>

<div class="aiki-overlay">
  <div class="aiki-wrapper">
    <hr />
    <h1>{value}</h1>
    <button on:click={removeInfowarning}
      ><p>Do not show this again</p>
      <small>(this will turn off the warning step before redirection</small
      ></button
    >
    <hr />
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
  }

  .aiki-wrapper {
    display: flex;
    flex-direction: column;
    width: 200px;
    position: fixed;
    top: 40%;
    left: calc(50% - 100px);
    background-color: #282c34;
    justify-items: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 10px 10px 5px grey;
  }

  hr {
    width: 90%;
    color: grey;
  }

  h1,
  p,
  small {
    text-align: center;
    margin: 0;
    color: #fff;
  }

  button {
    width: 90%;
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    border-radius: 15px;
  }
</style>
