if (/chrome/i.test(window.navigator.userAgent)) {
  browser = chrome;
}


class MyClass {
  get foo() {
    return 'foo';
  }
}


function handleInternal() {
  return Promise.resolve(new MyClass());
}

async function setup() {
  await browser.contentScripts.register({
    matches: ['*://developer.mozilla.org/*'],
    js: [{code: 'browser.runtime.sendMessage("").then(r => { debugger; console.dir(r) });'}],
    runAt: "document_idle"
  });

  browser.runtime.onMessage.addListener(handleInternal);
}


setup();
