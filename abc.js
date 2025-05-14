const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.isComposing) {
    // ...
  }
})
