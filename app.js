document.addEventListener("DOMContentLoaded", function () {
  let savingsBalance = 0;
  let goalAmount = 0;
  let goalProgress = 0;

  // Update savings balance on the UI
  function updateSavingsBalance() {
    document.getElementById("savingsBalance").textContent =
      savingsBalance.toFixed(2);
    updateGoalProgress(); // Call to update the progress bar

    // Check if the goal is set and met
    if (goalAmount > 0 && savingsBalance >= goalAmount) {
      // Display the congratulatory message
      document.getElementById("goalProgress").textContent =
        "Congrats! Goal Met!";

      // Update the progress bar to 100%
      document.getElementById("progressBar").style.width = "100%";
    }
  }

  // Update savings balance on the UI --Previous Code
  // function updateSavingsBalance() {
  //   document.getElementById("savingsBalance").textContent =
  //     savingsBalance.toFixed(2);
  //   updateGoalProgress(); // Call to update the progress bar
  // }

  // Update goal amount and progress on the UI
  function updateGoal() {
    document.getElementById("goalAmount").textContent = goalAmount.toFixed(2);
    updateGoalProgress(); // Call to update the progress bar
  }

  // Update the progress bar
  function updateGoalProgress() {
    if (goalAmount > 0) {
      goalProgress = (savingsBalance / goalAmount) * 100;
      goalProgress = goalProgress > 100 ? 100 : goalProgress; // Cap at 100%
      document.getElementById("goalProgress").textContent =
        goalProgress.toFixed(2) + "%";
      document.getElementById("progressBar").style.width = goalProgress + "%";
      document.getElementById("progressBar").textContent =
        goalProgress.toFixed(2) + "%";
    } else {
      document.getElementById("goalProgress").textContent = "0.00%";
      document.getElementById("progressBar").style.width = "0%";
      document.getElementById("progressBar").textContent = "0.00%";
    }
  }

  // Add to savings
  document
    .getElementById("addToSavings")
    .addEventListener("click", function () {
      const amount = parseFloat(document.getElementById("savingsAmount").value);
      if (!isNaN(amount) && amount > 0) {
        savingsBalance += amount;
        updateSavingsBalance();
      }
    });

  // Subtract from savings
  document
    .getElementById("subtractFromSavings")
    .addEventListener("click", function () {
      const amount = parseFloat(document.getElementById("savingsAmount").value);
      if (!isNaN(amount) && amount > 0 && amount <= savingsBalance) {
        savingsBalance -= amount;
        updateSavingsBalance();
      }
    });

  // Set goal
  document.getElementById("setGoal").addEventListener("click", function () {
    const target = parseFloat(document.getElementById("goalTarget").value);
    if (!isNaN(target) && target > 0) {
      goalAmount = target;
      updateGoal();
    }
  });

  // Initialize UI
  updateSavingsBalance();
  updateGoal();
});
