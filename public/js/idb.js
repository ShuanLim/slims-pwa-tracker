let db;
const request = indexedDB.open("budget_tracker", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("new_budget", { autoIncrement: true });
};

request.onsuccess = function (event) {
   db = event.target.result;

  // check if app is online
  if (navigator.onLine) {
    uploadBudget();
  }
};

request.onerror = function (event) {
  console.log("Error: " + event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(["new_budget"], "readwrite");
  const store = transaction.objectStore("new_budget");

  store.add(record);
}

function uploadBudget() {
  const transaction = db.transaction(["new_budget"], "readwrite");
  const store = transaction.objectStore("new_budget");
  const getAll = store.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => {
          // delete the records if successful
          const transaction = db.transaction(["new_budget"], "readwrite");
          const store = transaction.objectStore("new_budget");
          store.clear();
        });
    }
  };
}
function deletePending() {
  const transaction = db.transaction(["new_budget"], "readwrite");
  const store = transaction.objectStore("new_budget");
  store.clear();
}

// listen for app
window.addEventListener("online", uploadBudget); 