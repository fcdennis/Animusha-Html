import os
try:
    from SimpleHTTPServer import SimpleHTTPRequestHandler as Handeler
    from socketserver import TCPServer as Server
except ImportError:
    from http.server import SimpleHTTPRequestHandler as Handeler
    from http.server import HTTPServer as Server

# Read port selected by the cloud for our application
PORT = int(os.getenv('PORT', 8000))
# Change current directory to avoid exposure of control files
os.chdir('static')

httpd = Server(("", PORT), Handeler)
try:
    print("Start serving at port %i" % PORT)
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
httpd.server_close()
