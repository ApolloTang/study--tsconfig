import { someFunction } from "./some-module";
import { fooType } from "./some-module";

export { someFunction };
export { fooType };  // <--- IDE tells us this can lead to mistake
//       ^^^^^^^
//       [tsserver 1205] Re-exporting a type when the '--isolatedModules'
//       flag is provided requires using 'export type'
