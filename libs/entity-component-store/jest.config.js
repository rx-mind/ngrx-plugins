module.exports = {
  displayName: 'entity-component-store',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
  coverageDirectory: '../../coverage/libs/entity-component-store',
  coveragePathIgnorePatterns: [
    // @ngrx/entity files
    '<rootDir>/src/lib/select-id.ts',
    '<rootDir>/src/lib/sorted-state-adapter.ts',
    '<rootDir>/src/lib/unsorted-state-adapter.ts',
  ],
  coverageReporters: ['text', 'html'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
