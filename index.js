async function handleRequest(request) {
  const extension = new URL(request.url).pathname.replace('/', '')

  const html = `<!doctype html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <title>Redirecting...</title>
      <script>
          window.onload = function () {
            window.location.replace("vscode:extension/${extension}");
            window.close()
          }
      </script>
  </head>
  <body></body>
  </html>`

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})