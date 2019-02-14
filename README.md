normalize-objects
==================

Takes an array of objects and makes sure each of them has the same fields.

Installation
------------

    npm install normalize-objects

Usage
-----

    var NormalizeObjects = require('normalize-objects');
    var normalizeObjects = NormalizeObjects({
      defaults: {
        number: -1,
        date: new Date()
      }
    });

    normalizeObjects([
      {
        a: 3,
        b: 'hey'
      },
      {
        b: 'yo',
        c: '2019-02-24T00:00:00Z'
      },
      {
        a: 5,
        d: ['dog', 'man']
      }
    ]);

This would yield:

    [
      {
        a: 3,
        b: 'hey',
        c: <whatever the date is at the time it's run, as an ISO format string>,
        d: []
      },
      {
        a: -1,
        b: 'yo',
        c: '2019-02-24T00:00:00Z',
        d: []
      },
      {
        a: 5,
        b: '',
        c: <whatever the date is at the time it's run, as an ISO format string>,
        d: ['dog', 'man']
      }
    ]

Params:

- Constructor (returns a function) opts:
    - defaults: An object with types as keys and default values for the types as values.

- Function: Takes just one param: an array of objects.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
