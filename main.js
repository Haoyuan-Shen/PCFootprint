const copyButton = document.getElementById('copy-citation');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    copyStatus.textContent = 'BibTeX copied to clipboard.';
    copyButton.textContent = 'Copied ✓';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2000);
  } catch {
    copyStatus.textContent = 'Copy is unavailable. Select the BibTeX text below to copy it manually.';
  }
});
