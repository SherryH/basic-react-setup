'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = React.createElement(
  'h1',
  null,
  'Hello world ',
  formatName(user)
);

function App1(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      'yoyo',
      props.functype
    ),
    React.createElement(
      'div',
      null,
      element
    )
  );
}

var App2 = function App2(_ref) {
  var test = _ref.test;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      'tomorrow there will be a ',
      test
    ),
    React.createElement(
      'ul',
      null,
      numList
    )
  );
};

var numList = [1, 2, 3].map(function (i) {
  return React.createElement(
    'li',
    { key: i.toString() },
    i * 2
  );
});

var App3 = function App3(_ref2) {
  var surprise = _ref2.surprise;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'wow ',
      surprise
    )
  );
};

ReactDOM.render(React.createElement(App1, { functype: 'ReAct' }), document.getElementById("app"));
ReactDOM.render(React.createElement(App2, { test: 'Tech assessment' }), document.getElementById("app2"));
ReactDOM.render(React.createElement(App3, { surprise: 'I got the Babel transpilation working! by removing the type=text/babel... from the script tag in index.html' }), document.getElementById("app3"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJmb3JtYXROYW1lIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZWxlbWVudCIsIkFwcDEiLCJwcm9wcyIsImZ1bmN0eXBlIiwiQXBwMiIsInRlc3QiLCJudW1MaXN0IiwibWFwIiwiaSIsInRvU3RyaW5nIiwiQXBwMyIsInN1cnByaXNlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9BLEtBQUtDLFNBQUwsR0FBaUIsR0FBakIsR0FBdUJELEtBQUtFLFFBQW5DO0FBQ0Q7O0FBRUQsSUFBTUYsT0FBTztBQUNYQyxhQUFXLFFBREE7QUFFWEMsWUFBVTtBQUZDLENBQWI7O0FBS0EsSUFBTUMsVUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFpQkosYUFBV0MsSUFBWDtBQUFqQixDQURGOztBQUlBLFNBQVNJLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQVNBLFlBQU1DO0FBQWYsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFNSDtBQUFOO0FBRkYsR0FERjtBQU1EOztBQUVELElBQUlJLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLFNBQ1Q7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBOEJBO0FBQTlCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0M7QUFBTDtBQUZGLEdBRFM7QUFBQSxDQUFYOztBQU9BLElBQU1BLFVBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBUUMsR0FBUixDQUFZLFVBQUNDLENBQUQ7QUFBQSxTQUMxQjtBQUFBO0FBQUEsTUFBSSxLQUFLQSxFQUFFQyxRQUFGLEVBQVQ7QUFBd0JELFFBQUk7QUFBNUIsR0FEMEI7QUFBQSxDQUFaLENBQWhCOztBQUlBLElBQUlFLE9BQU8sU0FBUEEsSUFBTyxRQUFvQjtBQUFBLE1BQVZDLFFBQVUsU0FBVkEsUUFBVTs7QUFDN0IsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFRQTtBQUFSO0FBREYsR0FERjtBQUtELENBTkQ7O0FBUUFDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsSUFBRCxJQUFNLFVBQVMsT0FBZixHQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQztBQUNBSCxTQUFTQyxNQUFULENBQWdCLG9CQUFDLElBQUQsSUFBTSxNQUFLLGlCQUFYLEdBQWhCLEVBQWlEQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWpEO0FBQ0FILFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsSUFBRCxJQUFNLFVBQVMsNkdBQWYsR0FBaEIsRUFBaUpDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakoiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybWF0TmFtZSh1c2VyKSB7XG4gIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG59XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0hhcnBlcicsXG4gIGxhc3ROYW1lOiAnUGVyZXonXG59O1xuXG5jb25zdCBlbGVtZW50ID0gKFxuICA8aDE+SGVsbG8gd29ybGQge2Zvcm1hdE5hbWUodXNlcil9PC9oMT5cbik7XG5cbmZ1bmN0aW9uIEFwcDEgKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz55b3lve3Byb3BzLmZ1bmN0eXBlfTwvaDM+XG4gICAgICA8ZGl2PntlbGVtZW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG52YXIgQXBwMiA9ICh7dGVzdH0pPT4oXG4gIDxkaXY+XG4gICAgPGgzPnRvbW9ycm93IHRoZXJlIHdpbGwgYmUgYSB7dGVzdH08L2gzPlxuICAgIDx1bD57bnVtTGlzdH08L3VsPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IG51bUxpc3QgPSBbMSwyLDNdLm1hcCgoaSk9PihcbiAgPGxpIGtleT17aS50b1N0cmluZygpfT57aSAqIDJ9PC9saT5cbikpO1xuXG52YXIgQXBwMyA9IGZ1bmN0aW9uKHtzdXJwcmlzZX0pe1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD53b3cge3N1cnByaXNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0gO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcDEgZnVuY3R5cGU9XCJSZUFjdFwiIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcDIgdGVzdD1cIlRlY2ggYXNzZXNzbWVudFwiIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcDJcIikpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAzIHN1cnByaXNlPVwiSSBnb3QgdGhlIEJhYmVsIHRyYW5zcGlsYXRpb24gd29ya2luZyEgYnkgcmVtb3ZpbmcgdGhlIHR5cGU9dGV4dC9iYWJlbC4uLiBmcm9tIHRoZSBzY3JpcHQgdGFnIGluIGluZGV4Lmh0bWxcIiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAzXCIpKTsiXX0=