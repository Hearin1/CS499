const statusEndpoint = 'http://localhost:3000/api/status';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const status = async function(req, res) {
  await fetch(statusEndpoint, options)
    .then(res => res.json())
    .then(json => {
      let message = null;
      if (!(json instanceof Array)) {
        message = 'API lookup error';
        json = [];
      }
      res.render('status', { title: 'Status Checkpoints', statuses: json, message });
    })
    .catch(err => res.status(500).send(err.message));
};

module.exports = { status };
