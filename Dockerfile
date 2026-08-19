FROM httpd:2.4.68
COPY index.html style.css script.js /usr/local/apache2/htdocs/
COPY assets/ /usr/local/apache2/htdocs/assets/