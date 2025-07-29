const dashboard = async (req, res) => {
  const endpoint = `http://localhost:3000/api/users/${req.params.username}/dashboard`;
  const options = { method: 'GET', headers: { Accept: 'application/json' } };
  try {
    const response = await fetch(endpoint, options);
    const json = await response.json();
    let message = null;
    if (!response.ok) {
      message = json.message || 'API lookup error';
    }
    res.render('dashboard', {
      title: `${req.params.username} Dashboard`,
      user: json.user,
      statuses: json.statuses,
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { dashboard };
