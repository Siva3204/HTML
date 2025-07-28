document.addEventListener("DOMContentLoaded", () => {
  const notepadTextarea = document.getElementById("notepadText");
  const saveButton = document.getElementById("saveBtn");
  const clearButton = document.getElementById("clearBtn");
  const localStorageKey = "notepadContent";

  // Load saved content on page load
  const savedContent = localStorage.getItem(localStorageKey);
  if (savedContent) {
    notepadTextarea.value = savedContent;
  }

  // Save the content to local storage
  saveButton.addEventListener("click", () => {
    localStorage.setItem(localStorageKey, notepadTextarea.value);
    alert("Saved!"); // Simple feedback
  });

  // Clear the text area and local storage
  clearButton.addEventListener("click", () => {
    notepadTextarea.value = "";
    localStorage.removeItem(localStorageKey);
    alert("Cleared!"); // Simple feedback
  });

  // Optional: Auto-save content every few seconds
  setInterval(() => {
    localStorage.setItem(localStorageKey, notepadTextarea.value);
  }, 5000); // Save every 5 seconds
});
