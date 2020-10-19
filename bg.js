Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myObj: {
      foo: 'bar'
    },
  },
})

function handleInternal() {
  const myObj = store.state.myObj;
  console.dir(myObj)
  return Promise.resolve(myObj);
}

async function setup() {
  browser.runtime.onMessage.addListener(handleInternal);
}


setup();
