import http.server
import socketserver

PORT = 8080  # Change the port to 8080 (or any available port)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
