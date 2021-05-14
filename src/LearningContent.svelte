<script>
  import LearningWelcome from "./LearningWelcome.svelte";
  import OneClickContinue from "./OneClickContinue.svelte";

  export let gotoOrigin;
  export let endInjection
  export let welcomeVisible;
  export let getReady;
  let continueVisible = true;

</script>

{#if welcomeVisible}
  <LearningWelcome bind:welcomeVisible />
{/if}
{#if continueVisible}
  <OneClickContinue bind:continueVisible {gotoOrigin} {endInjection} {getReady} />
{/if}
