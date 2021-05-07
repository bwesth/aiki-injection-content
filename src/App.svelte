<script>
  import TimeSelector from "./TimeSelector.svelte";

  let minutesArray = [1,2,3,4,5,6];
  let secondsArray = [0, 15, 45];

  console.log("minutesarray", minutesArray);
  console.log("secondsarray", secondsArray)
</script>

<div class="main">
  <div class="row">
    <div class="col-sm">
      <p>Time spent learning:</p>
      <p>Time you get on your procrastination sites in exchange:</p>
    </div>
    <div class="col-sm" />
    <div class="col-sm">
      <TimeSelector {minutesArray} />
      <TimeSelector {secondsArray} />
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
