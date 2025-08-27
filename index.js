// Heard Icons
let availableHeards = document.getElementById("heardCount");

let allHeards = document.getElementsByClassName("heards");
for (let heart of allHeards) {
  heart.addEventListener("click", function () {
    let availableHeardsNumber = parseInt(availableHeards.innerText);
    let count = availableHeardsNumber + 1;
    availableHeards.innerText = count;
  });
}
// reuseable fuction Call
function coins(sname, snum) {
  let avCoin = document.getElementById("coin");
  let avCoinNum = parseInt(document.getElementById("coin").innerText);
  if (avCoinNum < 20) {
    alert(
      "you don't have enough coins to call , need minimum 20 coins to call"
    );
    return;
  }
  let newCoin = avCoinNum - 20;
  avCoin.innerText = newCoin;
  let serviceName = document.getElementById(sname).innerText;
  let serviceNum = parseInt(document.getElementById(snum).innerText);
  alert(`Calling ${serviceName}  ${serviceNum} `);

  let history = document.getElementById("HistoryList");
  let entry = document.createElement("div");
  entry.classList.add("p-2", "m-2", "rounded-2", "bg-[#FAFAFA]");
  let now = new Date();
  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  entry.innerHTML = ` <div class="flex justify-between"> <strong>${serviceName}</strong> <span>${time}</span> </div> <h1>${serviceNum}</h1>`;
  history.appendChild(entry);
}
// Call Function
document.getElementById("call1").addEventListener("click", function () {
  coins("sname1", "snum1");
});
document.getElementById("call2").addEventListener("click", function () {
  coins("sname2", "snum2");
});
document.getElementById("call3").addEventListener("click", function () {
  coins("sname3", "snum3");
});
document.getElementById("call4").addEventListener("click", function () {
  coins("sname4", "snum4");
});
document.getElementById("call5").addEventListener("click", function () {
  coins("sname5", "snum5");
});
document.getElementById("call6").addEventListener("click", function () {
  coins("sname6", "snum6");
});
document.getElementById("call7").addEventListener("click", function () {
  coins("sname7", "snum7");
});
document.getElementById("call8").addEventListener("click", function () {
  coins("sname8", "snum8");
});
document.getElementById("call9").addEventListener("click", function () {
  coins("sname9", "snum9");
});
