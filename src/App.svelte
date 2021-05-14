<script>
  import TimeSelector from "./TimeSelector.svelte";

  let minutesArray = Array.from({ length: 60 }, (_, i) => i + 1);
  let secondsArray = [0, 15, 30, 45];
  let label = "Min/Sec";

</script>

<div class="main">
  <div class="row top-row">
    <div class="col-sm">
      <p>Time spent learning:</p>
    </div>
    <div class="col-sm" />
    <div class="col-sm">
      <TimeSelector {minutesArray} {secondsArray} {label} />
    </div>
  </div>
</div>

<div class="main">
  <div class="row bottom-row">
    <div class="col-sm">
      <p>Time you get on your procrastination sites in exchange:</p>
    </div>
    <div class="col-sm" />
    <div class="col-sm">
      <TimeSelector {minutesArray} {secondsArray} {label} />
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-row {
    width: 80%;
    background-color: whitesmoke;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .bottom-row {
    width: 80%;
    background-color: whitesmoke;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
