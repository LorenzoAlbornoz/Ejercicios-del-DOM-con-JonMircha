const d = document;
export default function countdown (id, limitDate, finalMessage){
const $countdown = d.getElementById(id),
countdownDate = new Date(limitDate).getTime();

let countdownTempo = setInterval (() => {
    let now = new Date().getTime()
console.log(countdownDate, now)
}, 1000)
}