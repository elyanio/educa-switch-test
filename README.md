# This project was bootstrapped with Create Expo App.

### Available Scripts
In the project directory, you can run:

`yarn start`
##### Runs the app in the development mode.
Open to view it in the browser.

`yarn generate`
###### Run the grahpql code generator to do an instrocpection of the GIRHUTB API Schema,
###### beside to generate new query hooks to use them in the app

## The page will reload if you make edits.
You will also see any lint errors in the console.

`yarn web`
##### Runs the app for development in the browser.
Your app is ready to be enjoyed.!

### Create a local .env file
To run correctly this app, it's mandatory to create a .env file with local variables like

1- EXPO_API_ENDPOINT = *https://api.github.com/graphql*
2- EXPO_API_TOKEN = *"Your GitHub API token"*

Once you create this file with those variables inside, you must restart the whole app, to take efects over the code

## In order to make graphql operable, you should:
#### Type your API TOKEN on: 
[Contribution guidelines for this project](codegen.yml) 

*replace the token label with yours just after **Bearer** word with a white space between them*  

## Tech

*For styling:* 
* [React Native Paper for styling](https://callstack.github.io/react-native-paper/)

*For fetching:* 
* [Apollo Client](https://www.apollographql.com/client/)

*A Query Language to consult the API*
* [Graphql](https://graphql.org/)

*Hooks to take advantages of new REACT features*
* [REACT HOOKS](https://es.reactjs.org/docs/hooks-intro.html)  

*Apollo Cache*
In the words of Dan Abramov:
> "State is ephemeral"
[Apollo Cache](https://www.apollographql.com/docs/react/caching/cache-configuration/)
##### That's why it's used Apollo Cache over Redux, or other libs to maintain local state, and because it was a requirement in the explanation shared in GITHUB.  

##### Notes:
To see a correct functionality about repos collaborators pages, you can only ask to your repos info, associated with the generated TOKEN in your account ,  in other way you will get a null result set from GitHub, because their rules about permission about "Collaborators" in foreign repositories.