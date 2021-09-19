const users = ["User 1", "User 2"];


const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assign 01</title></head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Enter username"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assign 01</title></head>');
    res.write('<body><ul>');
    users.forEach(user => {
      res.write(`<li>${user}</li>`)
    });
    res.write('</ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split('=')[1];
      console.log(newUser);
      users.push(newUser);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }

}

module.exports = requestHandler;