const { writeFileSync, readFileSync } = require('fs')
const http = require('http')

const content = `
<span>
  CJW
</span>
<span>
(^_-)
</span>
<span>
  DD
</span>
`
writeFileSync('cjw_love_love.html', content)

const server = http.createServer(function (request, response) {
  let res = readFileSync(`cjw_love_love.html`)
  // set reponse header
  response.writeHead(200, { 'Content-Type': 'text/html' })
  // set response
  response.end(res)
})

server.listen('2222')
