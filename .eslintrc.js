'use strict';

/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    /* Variable cames */
    'camelcase': 2,
    /* Language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    /* Semicolons */
    'semi': 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { 'uninitialized': 'always', 'initialized': 'never' }],
    /* Minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single']
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5lc2xpbnRyYy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW52IiwicGFyc2VyT3B0aW9ucyIsImVjbWFGZWF0dXJlcyIsInJ1bGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFNQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxPQUFLO0FBQ0gsV0FBTztBQURKLEdBRFU7QUFJZkMsaUJBQWU7QUFDYkMsa0JBQWM7QUFDWixhQUFPO0FBREs7QUFERCxHQUpBO0FBU2ZDLFNBQU87QUFDTDtBQUNBLGdDQUE0QixDQUZ2QjtBQUdMLGNBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUhMO0FBSUw7QUFDQSxpQkFBYSxDQUxSO0FBTUw7QUFDQSxhQUFTLENBUEo7QUFRTCxjQUFVLENBQUMsQ0FBRCxFQUFJLE9BQUosQ0FSTDtBQVNMLGtCQUFjLENBQUMsQ0FBRCxFQUFJLFlBQUosQ0FUVDtBQVVMO0FBQ0EsWUFBUSxDQVhIO0FBWUwscUJBQWlCLENBWlo7QUFhTDtBQUNBLG1CQUFlLENBQUMsQ0FBRCxFQUFJLE1BQUosRUFBWSxFQUFFLG1CQUFtQixJQUFyQixFQUFaLENBZFY7QUFlTCxvQkFBZ0IsQ0FmWDtBQWdCTCxtQkFBZSxDQWhCVjtBQWlCTCxxQkFBaUIsQ0FqQlo7QUFrQkwscUJBQWlCLENBbEJaO0FBbUJMLHVCQUFtQixDQW5CZDtBQW9CTCwyQkFBdUIsQ0FwQmxCO0FBcUJMLHVCQUFtQixDQUFDLENBQUQsRUFBSSxFQUFFLFVBQVUsSUFBWixFQUFrQixTQUFTLElBQTNCLEVBQUosQ0FyQmQ7QUFzQkwsdUJBQW1CLENBdEJkO0FBdUJMO0FBQ0EsZUFBVyxDQUFDLENBQUQsRUFBSSxFQUFFLGlCQUFpQixRQUFuQixFQUE2QixlQUFlLE9BQTVDLEVBQUosQ0F4Qk47QUF5Qkw7QUFDQSxtQkFBZSxDQUFDLENBQUQsRUFBSSxNQUFKLENBMUJWO0FBMkJMLGNBQVUsQ0FBQyxDQUFELEVBQUksUUFBSjtBQTNCTDtBQVRRLENBQWpCIiwiZmlsZSI6Ii5lc2xpbnRyYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlc2UgcnVsZXMgZW5mb3JjZSBIYWNrIFJlYWN0b3IncyBzdHlsZSBndWlkZS5cbiAqIFZpc2l0IHRoaXMgcmVwbyBmb3IgbW9yZSBpbmZvcm1hdGlvbjpcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0b3Jjb3JlL2VzbGludC1jb25maWctaGFja3JlYWN0b3JcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW52OiB7XG4gICAgJ2VzNic6IHRydWVcbiAgfSxcbiAgcGFyc2VyT3B0aW9uczoge1xuICAgIGVjbWFGZWF0dXJlczoge1xuICAgICAgJ2pzeCc6IHRydWVcbiAgICB9XG4gIH0sXG4gIHJ1bGVzOiB7XG4gICAgLyogSW5kZW50YXRpb24gKi9cbiAgICAnbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzJzogMixcbiAgICAnaW5kZW50JzogWzIsIDJdLFxuICAgIC8qIFZhcmlhYmxlIGNhbWVzICovXG4gICAgJ2NhbWVsY2FzZSc6IDIsXG4gICAgLyogTGFuZ3VhZ2UgY29uc3RydWN0cyAqL1xuICAgICdjdXJseSc6IDIsXG4gICAgJ2VxZXFlcSc6IFsyLCAnc21hcnQnXSxcbiAgICAnZnVuYy1zdHlsZSc6IFsyLCAnZXhwcmVzc2lvbiddLFxuICAgIC8qIFNlbWljb2xvbnMgKi9cbiAgICAnc2VtaSc6IDIsXG4gICAgJ25vLWV4dHJhLXNlbWknOiAyLFxuICAgIC8qIFBhZGRpbmcgJiBhZGRpdGlvbmFsIHdoaXRlc3BhY2UgKHBlcmZlcnJlZCBidXQgb3B0aW9uYWwpICovXG4gICAgJ2JyYWNlLXN0eWxlJzogWzIsICcxdGJzJywgeyAnYWxsb3dTaW5nbGVMaW5lJzogdHJ1ZSB9XSxcbiAgICAnc2VtaS1zcGFjaW5nJzogMSxcbiAgICAna2V5LXNwYWNpbmcnOiAxLFxuICAgICdibG9jay1zcGFjaW5nJzogMSxcbiAgICAnY29tbWEtc3BhY2luZyc6IDEsXG4gICAgJ25vLW11bHRpLXNwYWNlcyc6IDEsXG4gICAgJ3NwYWNlLWJlZm9yZS1ibG9ja3MnOiAxLFxuICAgICdrZXl3b3JkLXNwYWNpbmcnOiBbMSwgeyAnYmVmb3JlJzogdHJ1ZSwgJ2FmdGVyJzogdHJ1ZSB9XSxcbiAgICAnc3BhY2UtaW5maXgtb3BzJzogMSxcbiAgICAvKiBWYXJpYWJsZSBkZWNsYXJhdGlvbiAqL1xuICAgICdvbmUtdmFyJzogWzEsIHsgJ3VuaW5pdGlhbGl6ZWQnOiAnYWx3YXlzJywgJ2luaXRpYWxpemVkJzogJ25ldmVyJyB9XSxcbiAgICAvKiBNaW51dGEgKi9cbiAgICAnY29tbWEtc3R5bGUnOiBbMiwgJ2xhc3QnXSxcbiAgICAncXVvdGVzJzogWzEsICdzaW5nbGUnXVxuICB9XG59O1xuIl19