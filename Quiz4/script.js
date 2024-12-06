function showSummary() {
    const nameInput = document.querySelector('input[type="text"]').value;
    if (nameInput.trim() === "") {
      alert("Please enter your name!");
    } else {
      alert(`Good Evening! ${nameInput}`);
    }
  }