# Tech Challenge Front

To execute the challenge; fork this in a private repository and invite me (or just clone and re-push it)

The goal of this exercise is to create a small application.

## Instructions
General tech notes and philosophy:

- Keep It Simple
- When in doubt, refer to first rule
- Write your code in a robust, extensible and following-best-practises way
- When in doubt, refer to first rule
- Any question ? Get in touch with me at tech@permettezmoideconstruire.fr

## Exercise

The repository contains this readme file, and a folder with a few assets.  

You have to create an application from scratch. You can use any framework or tech you want, as long as it's either in Javascript or Typescript. This includes React, Angular, Vue, Svelte, etc. 

The designs are just examples/inspiration, and there no need to replicate them down to the pixel. It is not the goal of this exercise.
  
The application consists of 2 pages: 
- a *login* page,
- a *map* page.

The navigation between these pages should be handled with a router.  

### Login page

The login page consist of 2 parts in the desktop version.
- The left part contains an image that takes 50% of the space. (Use `landing.jpg` image in the `assets` folder)
- The right part has two inputs (login and password) and a button.
  
**Don't bother making a functional login**: just make a page that redirects to the map page. Type anything in both the inputs, and click the button to be redirected to the map page. **But** if one or both fields is/are empty, it shows an error message when clicking the button.

#### Desktop version

<p align="center">
  <img src="https://raw.githubusercontent.com/permettez-moi-de-construire/pmdc-tech-challenge-front/master/assets/login-desktop.png" />
</p>

#### Mobile version

<p align="center">
  <img src="https://raw.githubusercontent.com/permettez-moi-de-construire/pmdc-tech-challenge-front/master/assets/login-mobile.png" />
</p>

### Map page

The map page contains a map that fills the window, an input and a button to validate the input.  
The user can enter the name of a town, hit the button, and the map wil center to this town.  

You can use a public api to get the town coordinates, and then use these coordinates to center the map.  

For example : [https://api.gouv.fr/documentation/api-geo](https://api.gouv.fr/documentation/api-geo)

To show the map, you can use [Leaflet](https://leafletjs.com/), or Google Maps (in this case you'll need to [create an API key](https://developers.google.com/maps/documentation/embed/get-api-key))

<p align="center">
  <img src="https://raw.githubusercontent.com/permettez-moi-de-construire/pmdc-tech-challenge-front/master/assets/map.png" />
</p>
