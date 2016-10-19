#!/usr/bin/python3

import http.server
import socketserver

PORT = 80

handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), handler)

print('Serving HTTP server at port %s' % PORT)

httpd.serve_forever()
