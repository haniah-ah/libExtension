chrome.runtime.onInstalled.addListener(() => {
  console.log("Library AI Book Finder extension installed!");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchBooks") {
    fetchLibraryCatalog(request.query).then(books => sendResponse({ books }));
    return true; // Keeps the message channel open
  }
});

async function fetchLibraryCatalog(query) {
  // Example: Replace with API call to library's catalog system
  console.log("Fetching books for query:", query);
  return [
    { title: "Book 1", author: "Author 1", available: true },
    { title: "Book 2", author: "Author 2", available: false }
  ];
}
