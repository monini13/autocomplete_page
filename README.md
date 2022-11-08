# autocomplete_page
Autocomplete search bar using ReactJS and Flask Python

This code base allows you to query search for GitHub Repositories using the GitHub Search API. Specifically, I've decided to use the repository search aspect of it. Code for frontend can be found on <b>frontend/App</b>.js, and code for backend can be found on <b>backend/app.py</b>. Type into the search box and it will dynamically load 5 repository matches according to the GitHub Search API.<br>

To download this repo:<br>
`git clone https://github.com/monini13/autocomplete_page`

<br>
<h2>ReactJS</h2>
ReactJS was used for the frontend. We need to install Frontend packages and start the server:<br>

    cd frontend
    npm install
    npm start


<br>
<h2>Flask Python</h2>
Flask Python was used for the backend. We need to make a virtual environment, install the libraries, and start the server:<br>

    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python3 app.py

To access the server, simply type http://localhost:5000 into your browser.