// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url: 'http://127.0.0.1:8000/api',
  // urlAuthSocial: 'http://127.0.0.1:8000/auth',
  // urlAuth: 'http://127.0.0.1:8000/api-auth',
  url: 'https://noodra.com:8443/api',
  urlAuth: 'https://noodra.com:8443/api-auth',
  urlAuthSocial: 'https://noodra.com:8443/auth',
  
  urlCategory:'https://noodra.com:8443/api/product/category/',
  SocialClientIdSecret: 'kA3gK0d57dEERYq1SotnP5bzvT3R0rOZMxfHKVeMe3Alyng1GnMucEjdfp8eSHENOCQxM9Q718iJfkrDh5rC5W9hId8nBuQhVYEej7vRaGeDcz7S52U40QTmuK4Mwz8P',
  SocialClientId: 'W3DsoViRvvYZLUh38gOJHbT3QBXzgFqlAsGWXWPX',
  deployUrl: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
