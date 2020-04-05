// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/firestore-grafico/us-central1',
  firebase: {
    apiKey: 'AIzaSyAWEKBc78XT_8VbKB1hJkd3APmxYsrMbcg',
    authDomain: 'firestore-grafico.firebaseapp.com',
    databaseURL: 'https://firestore-grafico.firebaseio.com',
    projectId: 'firestore-grafico',
    storageBucket: 'firestore-grafico.appspot.com',
    messagingSenderId: '689826584274',
    appId: '1:689826584274:web:29e20458f47c192fb17f0b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
