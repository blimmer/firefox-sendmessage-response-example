class MyClass {
  get foo() {
    return 'foo';
  }
}


function handleInternal() {
  return Promise.resolve(new MyClass());
}

async function setup() {
  browser.runtime.onMessage.addListener(handleInternal);
}


setup();
