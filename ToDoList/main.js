/*
Add Task:

When the user types in the input field and clicks the "Add Task" button:
Create a new <li> element with the task text.
Add a button or checkbox for marking the task as "completed."
Mark Task as Completed:

When the user clicks the "Mark as Completed" button or checks a checkbox:
Use a conditional to toggle the completed CSS class on the <li> element.
Update Stats:

Loop through the tasks in the <ul> to count:
How many tasks have the completed class.
How many tasks do not.
Update the text in the <p> element showing "Completed" and "Pending" counts.
*/

//Funksjon som legger til task fra input field
let numberOfItems = 0;

function taskAdded() {
  numberOfItems++;
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  let text = "";

  // numberOfTasks.textContent = `Completed 0: | Pending ${numberOfItems}`

  if (taskInput.value.trim().length >= 1) {
    //Om brukeren legger inn noe i input field blir det lagt til i listen
    text = document.createElement("li");
    text.textContent = taskInput.value;
    taskList.append(text);
    text.id = `item ${numberOfItems}`;
  } else {
    alert("Please fill in the field"); //Popup om brukeren ikke gir noen verdi i input
  }

  const completedButton = document.createElement("button");
  completedButton.textContent = "Mark as complete!";
  //completedButton.id = `completedButton ${numberOfItems}`
  completedButton.id = "completedButton";
  completedButton.addEventListener("click", function () {
    text.classList.toggle("completed");
    updateNumberOfTasks();
  });
  text.appendChild(completedButton);
  updateNumberOfTasks();
}

/*Et problem jeg møtte på her var at jeg hadde satt opp counteren i andre funksjonen så det ble en "overlap" 
   Fikset det ved å heller kjøre funksjonen updateNumberOfTasks() inni taskAdded() */

function updateNumberOfTasks() {
  const taskList = document.getElementById("taskList");
  const numberOfTasks = document.getElementById("stats");

  let completedTasks = 0;

  const tasks = taskList.children;

  for (item of tasks) {
    if (item.classList.contains("completed")) {
      completedTasks++;
    }
  }

  const pending = tasks.length - completedTasks;
  numberOfTasks.textContent = `Completed ${completedTasks} | Pending: ${pending}`;
}

/*
const completedButton = document.createElement("button")
completedButton.textContent = "Mark as complete!"
taskList.append(completedButton)
*/
/*
function updateNumberOfTasks(listItem) {
    listItem.classList.toggle("completed");
    completedButton.addEventListener("click", () => updateNumberOfTasks(taskList));
}

const completedButton = document.getElementById("completedButton")*/
