//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("book-form");
  const bookList = document.getElementById("book-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title && author && isbn) {
      addBookToTable(title, author, isbn);
      clearFormInputs();
    }
  });

  function addBookToTable(title, author, isbn) {
    const row = document.createElement("tr");
    const deleteCell = document.createElement("td");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td class="delete" onclick="deleteRow(this)"> X </td>
      `;

    row.appendChild(deleteCell);
    bookList.appendChild(row);
  }

  function clearFormInputs() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
});

function deleteRow(element) {
  const row = element.parentNode;
  row.parentNode.removeChild(row);
}
