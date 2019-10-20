module.exports = {
  name: 'flight-search-app-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flight-search-app-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
