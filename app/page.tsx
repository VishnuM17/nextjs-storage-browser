// 'use client';
// import React from "react";
// import { Amplify } from "aws-amplify";
// import { signOut } from "aws-amplify/auth";

// import { Button, withAuthenticator } from "@aws-amplify/ui-react";
// import {
//   createStorageBrowser,
//   createAmplifyAuthAdapter,
//   elementsDefault,
// } from "@aws-amplify/ui-react-storage/browser";
// import "@aws-amplify/ui-react-storage/styles.css";
// import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

// import config from "../amplify_outputs.json";

// Amplify.configure(config);

// function Example() {
//   const { StorageBrowser } = createStorageBrowser({
//     elements: elementsDefault,
//     config: createAmplifyAuthAdapter({
//       options: {
//         defaultPrefixes: [
//          'public/',
//           (identityId: string) => `protected/${identityId}/`,
//           (identityId: string) => `private/${identityId}/`,
//         ],
//       },
//     }),
//   });

//   return (
//     <>
//       <Button
//         marginBlockEnd="xl"
//         size="small"
//         onClick={() => {
//           signOut();
//         }}
//       >
//         Sign Out
//       </Button>
//       <StorageBrowser />
//     </>
//   );
// }

// export default withAuthenticator(Example);


// "use client"
// import { Flex } from "@aws-amplify/ui-react";
// import { createAmplifyAuthAdapter, createStorageBrowser, elementsDefault } from "@aws-amplify/ui-react-storage/browser";
// import "@aws-amplify/ui-react-storage/styles.css";
// import { Amplify } from "aws-amplify";
// import config from "../amplify_outputs.json";


// Amplify.configure(config);
// // these should match access patterns defined in amplify/storage/resource.ts
// const input = {
//   elements: elementsDefault,
//   config: createAmplifyAuthAdapter({
//     options: {
//       defaultPrefixes: [
//           'public/',
//           (identityId: string) => `protected/${identityId}/`,
//           (identityId: string) => `private/${identityId}/`,
//         ]
//     },
//   }),
// }
// const { StorageBrowser, useControl } = createStorageBrowser(input);

// function MyStorageBrowser() {
//   const [{ selected }] = useControl('LOCATION_ACTIONS');

//   return (
//     <Flex>
//       <Flex direction={'row'}>
//         <StorageBrowser.LocationsView />
//         <StorageBrowser.LocationDetailView />
//       </Flex>
//       {selected.type ? (
//         <dialog open>
//           <StorageBrowser.LocationActionView />
//         </dialog>
//       ) : null}
//     </Flex>
//   );
// }

// export default function CustomStorageBrowser() {
//   return (
//     <StorageBrowser.Provider>
//       <MyStorageBrowser />
//     </StorageBrowser.Provider>
//   )
// }


'use client';
import React from "react";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";

import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import {
  createStorageBrowser,
  createAmplifyAuthAdapter,
  elementsDefault,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

import config from "../amplify_outputs.json";

Amplify.configure(config);

function Example() {
  const { StorageBrowser } = createStorageBrowser({
    elements: elementsDefault,
    config: createAmplifyAuthAdapter({
      options: {
        defaultPrefixes: [
          "media-readwritedelete/",
          "media-readonly/",
          "shared-folder-readwrite/",
          (identityId: string) => `protected-useronlyreadwritedelete/${identityId}/`,
          (identityId: string) => `private-useronlyreadwritedelete/${identityId}/`,
        ],
      },
    }),
  });

  return (
    <>
      <Button
        marginBlockEnd="xl"
        size="small"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
      <StorageBrowser />
    </>
  );
}

export default withAuthenticator(Example);