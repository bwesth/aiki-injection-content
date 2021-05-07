<script>
  export let minutesArray;
  export let secondsArray;
  export let label;
</script>

<div class="wrapper">
  <select class="custom-select custom-select-sm inline">
    <optgroup label="Minutes">
      <!-- <option selected disabled>Minutes</option> -->
      {#each minutesArray as minute}
        <option value={minute}>{minute}</option>
      {/each}
    </optgroup>
  </select>

  <select class="custom-select custom-select-sm inline">
    <optgroup label="Seconds">
      <!-- <option selected disabled>Seconds</option> -->
      {#each secondsArray as second}
        <option value={second}>{second}</option>
      {/each}
    </optgroup>
  </select>

  <p><small>{label}</small></p>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .inline {
    display: inline !important;
    width: 25%;
    margin: 0px 5px 20px 0px;
  }

  p {
    display: inline;
    padding: 0;
    margin: 0px 5px 20px 0px;
  }
</style>
