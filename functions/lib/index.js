"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const algoliasearch = require('algoliasearch');
// [START init_algolia]
// Initialize Algolia, requires installing Algolia dependencies:
// https://www.algolia.com/doc/api-client/javascript/getting-started/#install
//
// App ID and API Key are stored in functions config variables
const ALGOLIA_ID = 'OAD8WH001E';
const ALGOLIA_ADMIN_KEY = 'da025ba3be9a6cbd89005d7ddee154a9';
//const ALGOLIA_SEARCH_KEY = 'ab741e79bc30778d384b74b9ec83c927';
const ALGOLIA_INDEX_NAME = 'Products';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);
admin.initializeApp();
exports.onItemCreated = functions.firestore.document('fiches/{ficheId}').onCreate((snap, context) => {
    // Get the note document
    console.log(snap);
    const product = snap.data();
    // Add an 'objectID' field which Algolia requires
    product.objectID = snap.id;
    // Write to the algolia index
    index.saveObject(product).then(x => console.log('added ', product.objectID));
});
exports.importFiches = functions.https.onRequest((request, response) => {
    admin.firestore().collection('fiches').get().then((snap) => {
        snap.forEach(doc => {
            const product = doc.data();
            // Add an 'objectID' field which Algolia requires
            product.objectID = doc.id;
            // Write to the algolia index
            index.saveObject(product).then(x => console.log('added ', product.objectID));
        });
    })
        .catch(err => {
        console.log(err);
    });
});
exports.onItemDeleted = functions.firestore.document('fiches/{ficheId}').onDelete((snap, context) => {
    // Get the note document
    console.log(snap);
    const product = snap.data();
    // Add an 'objectID' field which Algolia requires
    product.objectID = snap.id;
    // Write to the algolia index
    index.deleteObject(snap.id).then(x => console.log('deleted ', product.objectID));
});
exports.onItemUpdated = functions.firestore.document('fiches/{ficheId}').onUpdate((snap, context) => {
    console.log(snap.after.data());
    const product = snap.after.data();
    // Add an 'objectID' field which Algolia requires
    product.objectID = snap.after.id;
    // Write to the algolia index
    index.saveObject(product).then(x => console.log('added ', product.objectID));
});
//# sourceMappingURL=index.js.map