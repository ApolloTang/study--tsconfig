import { someFunction } from "./some-module";
import { foo } from "./some-module";
//       ^^^
//       tsc analyse the project and knows 'foo' is a type not a value

export { someFunction };
export { foo };

