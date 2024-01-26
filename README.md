# _Mr. Roboger's Neighborhood_

#### By _**India Lyon-Myrick**_

#### _A program that lists a modified array of numbers._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_

## Description

_A program that will output an array of numbers starting from 0, based on a number the user inputs. The array will have certain numbers modified._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/mr-roboger`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _None_

## License

MIT:

Copyright (c) _1/25/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

Describe: beepBoop()

Test: It will return a user-inputted number.
Code: beepBoop(8)
Expected Output: 8

Test: It will return a range of numbers from 0 to a user-inputted number.
Code: beepBoop(8)
Expected Output: 0, 1, 2, 3, 4, 5, 6, 7, 8

Test: It will return a user-inputted number with numbers containing 1, 2, or 3 modified to contain a custom string.
Code: beepBoop(8)
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8

Test: Numbers containing a 3 will have the user's name added to them.
Code: beepBoop(8, "John")
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor, John?", 4, 5, 6, 7, 8