## randity
Library to help you create random strings.
#### Installation

To install randity, use [npm](https://www.npmjs.com/package/randity):

    npm install randity

#### Usage
    var randity = require('randity')

    //Simply call randity with the number of strings you want it to generate.

    randity(12)
    //hlq4rr7bkhzr

    randity(123)
    //d499xzax888t0rcyu0h34ppwg5uzx04rbfw650malcgyc43jj4569fvicjfs6gerj1aft28j9r4yxffm667977pxfw7ods1km8xf616ovf90uyay2x2tu8ubz45

    //Takes in a number as an argument and returns an alphanumeric string of the number passed.

| :boom: Never pass 0 to randity e.g randity(0) this will throw an error as it is treated as empty and length can never be 0.              |
|:---------------------------|
| :warning:  Becareful of passing a very high number as this will block your code execution till it finishes execution.   |

 
 #### LICENCE
    randity is licensed under the MIT license


