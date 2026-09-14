function changeTab(name, btn) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  if (btn) btn.classList.add("active");

  document.getElementById("received").style.display = "none";
  document.getElementById("sent").style.display = "none";
  document.getElementById("newList").style.display = "none";

  if (name === "received")
    document.getElementById("received").style.display = "flex";
  else if (name === "sent")
    document.getElementById("sent").style.display = "flex";
  else document.getElementById("newList").style.display = "flex";
}

function showNew() {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  changeTab("new", null);
}

function accept(btn) {
  btn.closest(".card").remove();
  updateNumbers();
}

function decline(btn) {
  btn.closest(".card").remove();
  updateNumbers();
}

function sendReq(btn) {
  let card = btn.closest(".card");
  btn.parentElement.innerHTML = '<span class="pending">Pending</span>';
  document.getElementById("sent").appendChild(card);
  updateNumbers();
}

function updateNumbers() {
  document.getElementById("recCount").innerText =
    document.querySelectorAll("#received .card").length;
  document.getElementById("sentCount").innerText =
    document.querySelectorAll("#sent .card").length;
}

function closeNotif() {
  let notifBox = document.getElementById("notif");
  notifBox.style.display = "none";
}
