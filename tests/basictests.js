var test = require('tape');
var NormalizeObjects = require('../index');

var testCases = [
  {
    name: 'Simple',
    ctorOpts: {
      defaults: {
        number: -1,
        date: new Date('2019-02-14T00:00:00Z')
      }
    },
    objects: [
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
    ],
    expectedObjects: [
      {
        a: 3,
        b: 'hey',
        c: '2019-02-14T00:00:00.000Z',
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
        c: '2019-02-14T00:00:00.000Z',
        d: ['dog', 'man']
      }
    ]
  }
];

testCases.forEach(runCase);

function runCase(testCase) {
  test(testCase.name, runTest);

  function runTest(t) {
    var normalizeObjects = NormalizeObjects(testCase.ctorOpts);
    t.deepEqual(
      normalizeObjects(testCase.objects),
      testCase.expectedObjects,
      'Normalized objects are correct.'
    );
    t.end();
  }
}
