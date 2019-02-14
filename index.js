var dateRegex = new RegExp(/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\dZ/);

function NormalizeObjects({ defaults }) {
  var defaultValuesForTypes = Object.assign(
    {},
    {
      string: '',
      number: 0,
      date: undefined,
      boolean: false,
      array: []
    },
    defaults
  );

  if (defaultValuesForTypes.date instanceof Date) {
    defaultValuesForTypes.date = defaultValuesForTypes.date.toISOString();
  }

  return normalizeObjects;

  function normalizeObjects(objects) {
    var typesForFields = {};
    objects.forEach(recordFieldsFromProject);
    objects.forEach(fillInMissingFields);
    return objects;

    function recordFieldsFromProject(obj) {
      for (var field in obj) {
        var value = obj[field];
        let type = typeof value;
        if (type === 'string' && value.match(dateRegex)) {
          type = 'date';
        } else if (type === 'object' && Array.isArray(value)) {
          type = 'array';
        }
        typesForFields[field] = type;
      }
    }

    function fillInMissingFields(obj) {
      for (var field in typesForFields) {
        if (obj[field] === undefined) {
          obj[field] = defaultValuesForTypes[typesForFields[field]];
        }
      }
    }
  }
}

module.exports = NormalizeObjects;
