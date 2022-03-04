import { someFunction } from "./some-module";
import { foo } from "./some-module";
//       ^^^
//       In isolation, Babel have no way to tell the variable 'foo' is not a value

export { someFunction };
export { foo };

