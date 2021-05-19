/* PROC WARNING INJECTION STUFF!!!! */

// import ProcrastinationWarning from "./ProcrastinationWarning.svelte";

// function removeInfowarning() {
//   // will be replaced
// }
// let timer;

// function resolve(arg) {
//   console.log(timer.time);
// }

// let url
// let resolve
// const procrastinationWarning = new ProcrastinationWarning({
//   target: document.body,
//   props: { removeInfowarning, timer, resolve, url },
// });

// let resolve
// const procrastinationWarning = new ProcrastinationWarning({
//   target: document.body,
//   props: { removeInfowarning, timer, resolve },
// });

// export default procrastinationWarning;

// let removeGreeting;
// let removeContinueButton;
// function removeContinueButton() {
//   const element = document.getElementById("continue-button");
//   element.remove()
// }

// function removeGreeting() {
//  const element = document.getElementsByClassName("aiki-overlay")[0];
//  element.remove();
// }

/* LEARNING INJECTION STUFF!!!! */

// import LearningContent from "./LearningContent.svelte";

// function gotoOrigin(){
//   console.log("gotoOrigin")
// }
// function endInjection(){
//   console.log("endInjection")
// }

// let welcomeVisible = true

// function getReady(){
//   return true
// }

// const learningContent = new LearningContent({
//   target: document.body,
//   props: { welcomeVisible, gotoOrigin, endInjection, getReady },
// });

// export default learningContent;

/* CONTENT BLOCKER STUFF!!!! */

import ContentBlocker from "./ContentBlocker.svelte";

function gotoOriginTab() {
  console.log("Change to origin tab");
}


const contentBlocker = new ContentBlocker({
  target: document.body,
  props: { gotoOriginTab },
});

export default contentBlocker;
