# NYT Top Stories Feed

## Project Overview
This project was designed and built within an 8-hour sprint as a practice exercise. The goal of the app is to provide a simple UI through which a user can access articles provided by the New York Times Top Stories API. The project includes the ability to fetch articles across multiple publication sections (e.g. "Arts", "Politics", etc) and to further narrow the search using a search bar to return matches within an article's headline.

### Home Page
![Screen Shot 2023-02-23 at 6 30 44 AM](https://user-images.githubusercontent.com/110298370/220894104-075c7786-59a0-4371-a810-230e0035e802.png)

### Article View
![Screen Shot 2023-02-23 at 6 30 33 AM](https://user-images.githubusercontent.com/110298370/220894111-2d21c889-175c-4ec8-9020-9b715a23bd1a.png)

## Goals
- Deliver a functional app within an 8-hour sprint
- Incorporate the NYT Top Stories API
- Include search and/or sort functionality

## Installation
- Clone the repository
- Navigate to the project directory
- Install project dependencies (`npm install` or similar)
- Start the project (`npm start` or similar)
- If a browser window does not automatically open, navigate to [http://localhost:3000/](http://localhost:3000/)

## Using the App
The app's home page is a list of the default "home" articles provided by the NYT Top Stories API. These can be refined by using the search bar above. Clicking the magnifying glass icon or pressing the 'Enter' key will execute the search, and clicking the X icon will clear the search bar.

Additionally, you can view sections of the NYT Top Stories other than the default "home" section by using the dropdown menu in the top right. Selecting a different section using the dropdown menu will load all stories within that specific category.

You can click on individual article headlines to open a more detailed summary of the article. These summaries contain a link to the full NYT story, allowing you to follow through to the main website if the detailed summary catches your eye. If not, the back button will return you to the home page.

### Wireframe
![Screen Shot 2023-02-23 at 6 27 37 AM](https://user-images.githubusercontent.com/110298370/220896857-1c6a425d-1af7-4241-b9dd-498ce953bc4d.png)

Sole Contributor: [James Wasmer](https://github.com/jwasmer)
