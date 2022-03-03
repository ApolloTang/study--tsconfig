import { someFunction } from './export-import'
import { fooType } from './export-import'
//       ^^^^^^^ <-- the name tells us this variable is a type

console.log('someFunction(): ', someFunction())
console.log('fooType: ', fooType)  // <-- this is obviously a runtime error
//                       ^^^^^^^
//                       [tsserver 2693] 'fooType' only refers
//                       to a type, but is being used as a value here. [E]
console.log('finished execution')