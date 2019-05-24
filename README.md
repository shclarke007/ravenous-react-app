## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.  

Demo version available at [fair-foods.surge.sh](fair-foods.surge.sh)

### User Stories
```
As a user, I should be able to search for restaurants
As a user, I should be able to view a list of restaurants returned by the Yelp API
As a user, I should be able to sort through restaurants using a filter for best match, highest rated and most reviewed.
```

### Approach
This project was split into components then broken down into the following parts:   
- Created Static Components (`<Business />`, `<BusinessList />`, `<SearchBar />` and React main `<App />`)
- Passed Information to Components
- Set the State of Ravenous Components
- Interact with the Yelp API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
