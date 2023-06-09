# NODE MUSIC - Express and Integration TEST
Git clone this project, and run npm install
Setup your `.env` file, and then source the `database.sql` file to create your database or run `npm run migrate`


### Getting started :point_down:

The project comes with a boilerplate, _nearly_ already configured. (Eslint and Prettier)

In the project directory, you can run different scripts:

- `npm run dev` : Runs the app in the development mode using `nodemon` on port 8000 by default. You can change it by creating a `PORT` variable in your `.env` file. (You should create this file)
- `npm start`: Runs the app in production mode. This will **not re-start when you write your code !**
- `npm run lint` : This app came with basic ESLint config (Prettier + React), you can run a check every time using this script. :collision: BEWARE :collision: If you don't have Prettier installed in your Editor with format on save, you should run it with the next script
- `npm run prettier` : It runs Prettier on all your staged files. (only useful if you don't have Prettier installed in your editor)
- `npm test` : This is the most important command for this workshop. It will test your CRUDs with `jest`. More informations below.

### Rules

- :white_check_mark: Response bodies should be JSON.
- :white_check_mark: Request bodies should be JSON.
- :white_check_mark: `PUT` and `DELETE` request should return `204 no content`.
- :white_check_mark: `POST` request should return `201 created` with the associated created resource.

### Tests

This workshop comes with integration tests on most of the routes.

![](https://media.giphy.com/media/sECT307ocX509Gh9bI/giphy.gif)

- :loud_sound: GET `/api/tracks`
- :loud_sound: GET `/api/tracks/1`
- :loud_sound: POST `/api/tracks`
- :loud_sound: PUT `/api/tracks`
- :loud_sound: DELETE `/api/tracks`
- :headphones: GET `/api/albums`
- :headphones: GET `/api/albums/1`
- :headphones: GET `/api/albums/1/tracks`
- :headphones: POST `/api/albums`
- :headphones: PUT `/api/albums`
- :headphones: DELETE `/api/albums`

---

### Project architecture

This workshop comes with an already created architecture.

```sh
src
├── api
│   ├── index.js
│   ├── albums
│   │   ├── albumsController.js
│   └── tracks
│       ├── tracksController.js
├── app.js
├── index.js
└── middlewares.js
```

You should not have to worry about cors, body parser, error middleware, etc.  
Every `module.exports` and `require` are done. You don't have to worry about it ! _Unless you create new files of course_

---

### Your mission

All you have to do, is writing your own logic in each route files in each route file (`getAll`, `getOne`, `post`, `update`, `delete`).  
Here are some user stories about what you need to do:

- As a user, I need to be able to retrieve the full list of tracks
- As a user, I need to be able to retrieve one track by its ID
- As a user, I need to be able to create a new track
- As a user, I need to be able to update a track
- As a user, I need to be able to delete a track
- As a user, I need to be able to retrieve the full list of albums
- As a user, I need to be able to retrieve one album by its ID
- As a user, I need to be able to retrieve the tracks list of one album
- As a user, I need to be able to create a new album
- As a user, I need to be able to update an album
- As a user, I need to be able to delete an album

_Remember: for the tests to work properly, you need an `album` with id `1` and a track with id `1` in your DB !_


## It's done ! Congrats !

You can now chill :beers:

![](https://media.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.gif)  
![](https://media.giphy.com/media/pHYaWbspekVsTKRFQT/giphy.gif)
