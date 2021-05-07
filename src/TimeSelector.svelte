<script>
  export let minutesArray;
  export let secondsArray;

  console.log("This is the MArray in component",minutesArray);
  console.log("This is the SArray in component",secondsArray);
</script>

<select id="inline" class="custom-select custom-select-sm">
  <optgroup label="Minutes">
    <!-- <option selected disabled>Minutes</option> -->
    {#each minutesArray as minute}
    <option value="{minute}">{minute}</option>
    {/each}
  </optgroup>
</select>

<select id="inline" class="custom-select custom-select-sm">
  <optgroup label="Seconds">
    <!-- <option selected disabled>Seconds</option> -->
    {#each secondsArray as second}
    <option value="{second}">{second}</option>
    {/each}
  </optgroup>
</select>

<style>
  #inline {
    display: inline !important;
    flex-direction: row;
    width: 40%;
    margin-bottom: 20px;
  }
</style>
