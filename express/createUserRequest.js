const url = 'http://localhost:3000/user/create';
const options = {
  method: 'POST',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({'name': 'Peter',
    'email': 'peter.j@gmail.com',
    'age':'21'
  })
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}