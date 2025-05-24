const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    return res.json({ token: 'fake-jwt-token' });
  }
  res.status(401).json({ message: 'Unauthorized' });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server running at http://localhost:3000');
});
