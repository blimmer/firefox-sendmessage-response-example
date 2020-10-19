Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myObj: {
      foo: 'bar'
    },
  },
});

function handleInternal() {
  // The `foo` property is visible in the Content Script on Google Chrome, but not on Firefox.
  // I can work around this problem by coping the object using `Object.assign`, like this:
  // return Promise.resolve(Object.assign({}, store.state.myObj));
  return Promise.resolve(store.state.myObj);
}

async function setup() {
  browser.runtime.onMessage.addListener(handleInternal);
}

setup();
