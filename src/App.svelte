<script>
  import TimeSelector from "./TimeSelector.svelte";

  //Generates an array with values from 1->60
  let minutesArray = Array.from({ length: 60 }, (_, i) => i + 1);
  let secondsArray = [0, 15, 30, 45];

  console.log("minutesarray", minutesArray);
  console.log("secondsarray", secondsArray);
</script>

<div class="main">
  <div class="row">
    <div class="col-sm">
      <p>Time spent learning:</p>
      <p>Time you get on your procrastination sites in exchange:</p>
    </div>
    <div class="col-sm" />
    <div class="col-sm">
      <TimeSelector {minutesArray} {secondsArray} />
      <TimeSelector {minutesArray} {secondsArray} />
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row {
    width: 80%;
    background-color: whitesmoke;
    padding: 20px;
  }
</style>
