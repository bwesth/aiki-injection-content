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
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .inline {
    display: inline !important;
    width: 25% !important;
    margin: 0px 5px 20px 0px !important;
  }

  p {
    display: inline !important;
    padding: 0 !important;
    margin: 0px 5px 20px 0px !important;
  }
</style>
