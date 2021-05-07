import permute from './coding/permute.js'
import debounce from './coding/debounce.js'
import LinkedList from './coding/LinkedList.js'
import BinarySearchTree from './coding/BinarySearchTree.js'
import BinaryTree from './coding/BinaryTree.js'
import mul from './coding/mul.js'

import greet from './debugging/greet.js'
import scope from './debugging/scope.js'
import dog2 from './debugging/dog2.js'
import Dog from './debugging/Dog.js'
import isBig from './debugging/isBig.js'


const textStyle = 'color: #00a651; font-style: italic'

console.log(`%c1. permute:`, textStyle)
console.log(permute('')) // []
console.log(permute('abc')) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

console.log(`%c2. debounce:`, textStyle)
let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // only this call should invoke a()

console.log(`%c3. LinkedList:`, textStyle)
let list = new LinkedList(1, 2, 3)
console.log(list.add(4)) // undefined
console.log(list.add(5)) // undefined
console.log(list.has(1)) // true
console.log(list.has(4)) // true
console.log(list.has(6)) // false


console.log(`%c5. BinarySearchTree`, textStyle)
let tree = new BinarySearchTree
tree.add(1, 2, 3, 4)
tree.add(5)
console.log(tree.has(2)) // true
console.log(tree.has(5)) // true
console.log(tree.remove(3)) // undefined
console.log(tree.size()) // 4

console.log(`%c6. BinaryTree:`, textStyle)
let tree2 = new BinaryTree
let fn = value => console.log(value)
tree2.add(1, 2, 3, 4)
console.log('inorder:')
tree2.inorder(fn)
console.log('preorder:')
tree2.preorder(fn)
console.log('postorder:')
tree2.postorder(fn)

console.log(`%c7. mul function:`, textStyle)
console.log(mul(2)(3)(4)) // 24
console.log(mul(4)(3)(4)) // 48

console.log(`%c1. hey amy:`, textStyle)
console.log(greet({ name: 'amy' }))

console.log(`%c3. doggo:`, textStyle)
let sayName = dog2.sayName.bind(dog2)
sayName()

console.log(`%c4. says woof:`, textStyle)
let fido = new Dog('fido')
fido.bark()

console.log(`%c5. equality: Type conversion when non-strict equality. The array is converted to a number`, textStyle)
console.log(isBig(1)) // false
console.log(isBig([2])) // false
console.log(isBig([3])) // true

console.log(`%c3 scope:`, textStyle)
scope()
