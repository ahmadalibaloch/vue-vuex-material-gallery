# eurowings-imgur

## Approach

Following the BEM methodology, I followed component approach and created ReUsable components for this exercise.
Main component is the Gallery.vue which is responsible for rendering images in gallery. GalleryFitlers uses Menu Reusable component to render filtering options and refreshing results in grid interacting with Vuex store. For UI I used the 
material components for Vue, dialog component from material is used for showing image details.

Menu Reusable component interacts with the store (Vuex) to update relavent values in the state, each menu Item accepts store key, possible otions and visual info like Label.

Gallery Image is another simple component to take care of image with description layout, designed using flex layout.

Dialog box is hosted by Gallery componet which renders details of images using GalleryImageDetails component using card layout.

The Vuex store has an initial state which represents the application state structure. There are some computed properties as getters
which are used by Gallery component to display messages like loading etc. 
For this simple applications mutations, actions and getters are right there in the index.ts file, except constants. If the application 
grows we need to create actions.ts, mutations.ts and so on for easy management of different parts of the store.
For layout I used the css-grid for showing images in grid. For other components mostly Flex-Layout is followed.

Material Design has no typings for Typescript so I created a simple set of types which I used from material library.


## Libraries

https://class-component.vuejs.org/, this makes it really easy with TypeScript to rapidly develop Vuex applications
vue-property-decorator npm package creates a perfect match with Typescript, It has some useful decorators like Prop and Emit etc
axios is used for the REST API calls to Imgur server

Some Images or not rendering due to X-Content-Type-Options HTTP response header not set by the server, it instructs browsers to disable content or MIME sniffing.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
