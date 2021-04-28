import ProcrastinationWarning from "./ProcrastinationWarning.svelte";

function removeInfowarning() {
  // will be replaced
}
let timer;
// let timer = {
//   start: function () {},
//   stop: function () {},
//   iterval: undefined,
//   time: 5000,
//   slowed: false,
//   slow: function () {},
//   hasten: function () {},
// };


// function resolve(arg) {console.log(timer.time)}
// let timer = {
//   time: 5000,
//   interval: undefined,
//   slowed: false,
//   print: function () {},
//   start: function () {
// 	  console.log("Starting", timer.time)
//     timer.interval = setInterval(() => {
// 		console.log(Math.round(timer.time/1000))
//       if (timer.slowed) {
//         timer.time -= 20;
//       } else {
//         timer.time -= 100;
//       }
//       if (timer.time <= 0) {
// 		timer.stop();
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

const ProcrastinationWarning = new App({
  target: document.body,
  props: { removeInfowarning, timer },
});

export default ProcrastinationWarning;
