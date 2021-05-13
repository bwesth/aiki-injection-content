// import ProcrastinationWarning from "./ProcrastinationWarning.svelte";
import LearningContent from "./LearningContent.svelte";

// function removeInfowarning() {
//   // will be replaced
// }
// let timer;

// function resolve(arg) {
//   console.log(timer.time);
// }
// let timer = {
//   time: 5000,
//   interval: undefined,
//   slowed: false,
//   print: function () {},
//   start: function () {
//     console.log("Starting", timer.time);
//     timer.interval = setInterval(() => {
//       console.log(Math.round(timer.time / 1000));
//       if (timer.slowed) {
//         timer.time -= 20;
//       } else {
//         timer.time -= 100;
//       }
//       if (timer.time <= 0) {
//         timer.stop();
//         resolve({ msg: "Auto resolve", removeWarning: false });
//         // location.href = request.url;
//       }
//     }, 100);
//   },
//   stop: function () {
//     if (timer.interval) clearInterval(timer.interval);
//     timer.interval = undefined;
//   },
//   slow: function () {
//     timer.slowed = true;
//   },
//   hasten: function () {
//     timer.slowed = false;
//   },
// };
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

function gotoOrigin(){
  console.log("gotoOrigin")
}
function endInjection(){
  console.log("endInjection")
}

let countdown = 3000
let welcomeVisible = true


const learningContent = new LearningContent({
  target: document.body,
  props: { countdown, welcomeVisible, gotoOrigin, endInjection },
});

export default learningContent;
