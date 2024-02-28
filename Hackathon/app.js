// Function to add task to appropriate quadrant
function addTask() {
    // Prompt user for task and validate input
    const task = prompt('Enter your task:');
    if (!task) {
      alert('Task cannot be empty');
      return;
    }
  
    // Prompt user for quadrant and validate input
    const quadrant = prompt('Enter quadrant (1-4):');
    if (!quadrant || isNaN(quadrant) || quadrant < 1 || quadrant > 4) {
      alert('Invalid quadrant');
      return;
    }
  
    // Get the appropriate list based on the quadrant
    let listId;
    switch (quadrant) {
      case '1':
        listId = 'importantUrgentList';
        break;
      case '2':
        listId = 'importantNotUrgentList';
        break;
      case '3':
        listId = 'notImportantUrgentList';
        break;
      case '4':
        listId = 'notImportantNotUrgentList';
        break;
    }
  
    // Get the list and add the task
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);
  }
  
  // Add event listener to call addTask function on button click
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
  });