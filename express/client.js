const url = 'http://localhost:3000/blog/publish';
const options = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: '{"x":2,"y":2}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}