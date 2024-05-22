var input = document.getElementById("new-task");
var add_btn = document.getElementById("add-task-btn");
var task_list = document.getElementById("task-list");

add_btn.addEventListener("click", function () {
  if (input.value) {
    var now = new Date();
    var date = now.toLocaleDateString();
    var new_task = `<li class="task-item">
            <span class="task-text"> ${input.value}</span>
            <span class="number" id="number"></span>
            <div class="task-buttons">
            <span class="task-date">${date}</span>
            <button class="edit-btn" onclick="edit_btn(this)">✎</button>
            <button class="delete-btn" onclick="delete_btn(this)">&times;</button>
            </div></li>`;
    task_list.innerHTML += new_task;
    input.value = "";
  }
});
function edit_btn(element) {
  console.log("edit_btn", element.parentElement);
  var temp = prompt("Enter updated value", "Enter new value");
  element.parentElement.previousElementSibling.previousElementSibling.innerText =
    temp;
}
function delete_btn(element) {
  element.parentElement.parentElement.remove();
}
