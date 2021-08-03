# express-server

Base server app for serving react builds and make "production" environment testing with `catch-all` path treatment

## How to use
Put the full package contents `.` in a `server` folder inside your react app repository. 

```
react-app
|-src
|-public
|-server
|--index.js
|--package.json
|-package.json
```

Then, add this new script in the `package.json` of your react app.

```json
"scripts":{
    ...
    "serve": "react-scripts build && (cd server && npm start)"
}
```

Now run `npm run serve` and you're good to go.