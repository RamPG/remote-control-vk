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
    .then(async (res) => {
      const result = await res.json();
      const info = await fetch(`http://127.0.0.1:8080/attack/${result.id}/status`);
      return info;
    })
    .catch((err) => {
      return err;
    });
}
