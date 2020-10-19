if (/chrome/i.test(window.navigator.userAgent)) {
  chrome.runtime.sendMessage("", (r) => {
    debugger; console.dir(r);
  })
} else {
  browser.runtime.sendMessage("").then(r => { debugger; console.dir(r) });
}
