import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(method, url)

  if(method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.end('Criação de usuários')
  }

  return res.end('Hello Ignite')
})

server.listen(3333)