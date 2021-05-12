<script>
  import LearningWelcome from "./LearningWelcome.svelte";
  import OneClickContinue from "./OneClickContinue.svelte";

  export let gotoOrigin;
  export let countdown;
  export let endInjection
  export let welcomeVisible;
  let continueVisible = true;
  let canContinue = false;

  setTimeout(() => {
    canContinue = true;
  }, countdown);
</script>

{#if welcomeVisible}
  <LearningWelcome bind:welcomeVisible />
{/if}
{#if continueVisible}
  <OneClickContinue bind:continueVisible {gotoOrigin} {endInjection} bind:canContinue />
{/if}
