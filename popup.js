document.getElementById('showTitle').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  document.getElementById('title').innerText = tab.title || 'No title found';
});
