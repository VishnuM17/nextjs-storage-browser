import { defineStorage } from "@aws-amplify/backend";

// export const storage = defineStorage({
//   name: "storage-browser-test",
//   access: (allow: any) => ({
//     'media-readwritedelete/*': [allow.authenticated.to(['read', 'write', 'delete'])],
//     'media-readonly/*': [allow.authenticated.to(['read'])],
//     'shared-folder-readwrite/*': [
//       allow.authenticated.to(['read', 'write'])
//     ],
//     'protected-useronlyreadwritedelete/{entity_id}/*': [
//       allow.authenticated.to(['read']),
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ],
//     'private-useronlyreadwritedelete/{entity_id}/*': [
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ]
//   })
// });


// // amplify/storage/resource.ts

// export const storage = defineStorage({
//   name: 'storage-browser-test',
//   access: (allow: any) => ({
//     'public/*': [
//       allow.guest.to(['read', 'write']),
//       allow.authenticated.to(['read', 'write', 'delete']),
//     ],
//     'protected/{entity_id}/*': [
//       allow.authenticated.to(['read']),
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ],
//     'private/{entity_id}/*': [
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ]
//   })
// });

export const storage = defineStorage({
  name: "storage-browser-test",
  access: (allow: any) => ({
    'media-readwritedelete/*': [allow.authenticated.to(['read', 'write', 'delete'])],
    'media-readonly/*': [allow.authenticated.to(['read'])],
    'shared-folder-readwrite/*': [
      allow.authenticated.to(['read', 'write'])
    ],
    'protected-useronlyreadwritedelete/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private-useronlyreadwritedelete/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});