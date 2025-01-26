print("Content-Type: text/html")
print()



import database
# import cgi
# form=cgi.FieldStorage()
import requests
from PIL import Image
from io import BytesIO

print("<!DOCTYPE html>")
print("<html>")
print("<head>")
print("<title>The Family Star</title>")
print("<link rel=\"stylesheet\" href=\"style.css\">")
print("</head>")
print("<body>")
print("<div class=\"movie-container\">")

print("nav >")
print(" <a class=\"logo\" href=""><img src=\"../dc4f92f0-5f2d-4ff6-8408-0724ce65d60f (1).jpg\"></a>")
print("<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"avbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"fals\" aria-label=\"Toggle navigation\">")
print("  print(\"<span class=\"navbar-toggler-icon\"></span>")
print("</button>")
print("<div class=\"collapse navbar-collapse\" id=\"navbarNav\">")
print("    <ul class=\"navbar-nav\">")
print("        <li class=\"nav-item\">")
print("           <a class=\"nav-link\" href=\"index.html\">HOME</a>")
print("        </li>")
print("        <li class=\"nav-item\">")
print("           <a class=\"nav-link\" href=\"search jobs.html\">ABOUT US</a>")
print("        </li>")
print("        <li class=\"nav-item\">")
print("           <a class=\"nav-link\" href=\"recurments.html\">GENRE</a>")
print("        </li>")
print("        <li class=\"nav-item\">")
print("           <a class=\"nav-link\" href=\"companies.html\">DIRECTORS</a>")
print("        </li>")
print("        <li class=\"nav-item\">")
print("          <a class=\"nav-link\" href=\"services.html\"></a>")
print("        </li>")
print("<li class=\"nav-item\">")
print(" <a class=\"nav-link\" href=\"\">MORE</a>")
print("</li>")
print("</ul>")
print("</div>")
print(" <div class=\"login_text\"><a href=\"login.html\">LOGIN HERE</a></div>")
print("</nav")


d1=database.databaseManager('tanmay','Hello2K23###123','127.0.0.1','movies')
read_statemet="SELECT title FROM `movies`.`new_table` WHERE `genreid` = 2 ;"

output=d1.dql(read_statemet)
for k in range(len(output)):
    movie=output[k]
    current_movie=movie[0]



    # Replace with your OMDb API key
    API_KEY = 'aa962181'
    BASE_URL = 'http://www.omdbapi.com/'

    def get_movie_poster(movie_name):
        params = {
            'apikey': API_KEY,
            't': movie_name  # 't' stands for title
        }
        
        # Perform the request
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()
        
        # Extract JSON data from the response
        data = response.json()
        
        if data.get('Response') == 'False':
            print(f"Error: {data.get('Error')}")
            return
        
        poster_url = data.get('Poster')
        
        if poster_url == 'N/A':
            print('No poster available for this movie.')
            return
        
        # Download the image
        img_response = requests.get(poster_url)
        img_response.raise_for_status()
        
        
        # Open and save the image
        img = Image.open(BytesIO(img_response.content))
        img.save(f'bollywood_movie_poster{k}.jpg')
        
        print('Movie poster saved as bollywood_movie_poster.jpg')

    # Example usage

    get_movie_poster(current_movie)  # Replace with the name of your Bollywood movie

    print()
    print()
    print(f"<img src=\"bollywood_movie_poster{k}\" alt=\"{current_movie}\">")
    print(f"<h2>{current_movie}</h2>")








    def get_movie_description(movie_name):
        base_url = 'http://www.omdbapi.com/'
        params = {
            't': movie_name,         # Title of the movie
            'apikey': 'aa962181'        # Your API key
        }
        
        response = requests.get(base_url, params=params)
        data = response.json()
        
        if data['Response'] == 'True':
            return data.get('Plot', 'No description available.')
        else:
            return data.get('Error', 'Movie not found.')

    if __name__ == "__main__":
        movie_name = "Uri: The Surgical Strike"
        description = get_movie_description(movie_name)
        print(f"<p>Description for '{movie_name}':\n{description}</p>")
        
    print("<p>IMDb: 5.3 | 2h 35 min | 2024 | X-RAY | UHD | U/A 13+</p>")
    print("<p>Comedy | Action | Drama | Romance</p>")
    print("<button>Watch Now</button>")
    print("</div>")
print("</body>")
print("</html>")











