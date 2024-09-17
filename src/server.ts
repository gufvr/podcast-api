import * as http from 'http'

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  
})

server.listen(3333, () => {
  console.log('Server running on port:3333');
  
});