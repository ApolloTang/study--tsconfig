import { someFunction } from './export-import'
import { foo } from './export-import'
//       ^^^ <-- we don't know if this variable is a value or a type

console.log('someFunction(): ', someFunction())
console.log('foo: ', foo)
//                   ^^^
//                   [tsserver 2693] 'foo' only refers
//                   to a type, but is being used as a value here. [E]
console.log('finished execution')