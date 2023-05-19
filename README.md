# Operations with sets
## Install
```
npm i @sndmath/set
```
## Import
```
import { SndSet } from '@sndmath/set';
```
## Union
```
let v = [2, 4, 4, 5, 17, 'lulu'];
let s0 = new SndSet(v);
v = [3, 14, 14, 5, 9, 17];
let s1 = new SndSet(v);
let s2 = Array.from(SndSet.union(s0, s1));
console.log(s2);
// [2, 4, 5, 17, 'lulu', 3, 14, 9]
```
## Intersection
```
let v = [2, 4, 4, 5, 17, "lulu"];
let s0 = new SndSet(v);
v = [3, 14, 14, 5, 9, 17];
let s1 = new SndSet(v);
let s3 = Array.from(SndSet.intersection(s0, s1));
console.log(s3);
// [5, 17]
```
## Difference
```
let v = [2, 4, 4, 5, 17, "lulu"];
let s0 = new SndSet(v);
v = [3, 14, 14, 5, 9, 17];
let s1 = new SndSet(v);
let s4 = Array.from(SndSet.diff(s0, s1));
console.log(s4);
// [2, 4, 'lulu']
```
## Symmetric difference
```
let v = [2, 4, 4, 5, 17, "lulu"];
let s0 = new SndSet(v);
v = [3, 14, 14, 5, 9, 17];
let s1 = new SndSet(v);
let s5 = Array.from(SndSet.symDiff(s0, s1));
console.log(s5);
// [2, 4, 'lulu', 3, 14, 9]
```
## Details
### `SndSet` is a javascript class that extends javascript built-in `Set` class.
