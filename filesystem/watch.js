const { watch } = require('node:fs/promises');

const ac = new AbortController();
const { signal } = ac;
// setTimeout(() => ac.abort(), 10000);

(async () => {
  let json = "test.json";
  try {
    debugger;
    const watcher = watch(json, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();