import { someFunction } from './export-import'
import type { fooType } from './export-import'

console.log('someFunction(): ', someFunction())
console.log('fooType: ', fooType)  // <-- Runtime error
//                       ^^^^^^^
//                       [tsserver 2693] 'fooType' only refers
//                       to a type, but is being used as a value here. [E]
console.log('finished execution')