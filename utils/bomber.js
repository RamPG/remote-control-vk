const fetch = require('node-fetch');

module.exports = function (phone, cycles) {
  fetch('http://127.0.0.1:8080/attack/start', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      number_of_cycles: parseInt(cycles, 10),
      phone,
    }),
  })
};
