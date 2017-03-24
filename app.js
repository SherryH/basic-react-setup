function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>Hello world {formatName(user)}</h1>
);

function App1 (props) {
  return (
    <div>
      <h3>yoyo{props.functype}</h3>
      <div>{element}</div>
    </div>
  );
}

var App2 = ({test})=>(
  <div>
    <h3>tomorrow there will be a {test}</h3>
    <ul>{numList}</ul>
  </div>
);

const numList = [1,2,3].map((i)=>(
  <li key={i.toString()}>{i * 2}</li>
));

var App3 = function({surprise}){
  return (
    <div>
      <p>wow {surprise}</p>
    </div>
  );
} ;

ReactDOM.render(<App1 functype="ReAct" />, document.getElementById("app"));
ReactDOM.render(<App2 test="Tech assessment" />, document.getElementById("app2"));
ReactDOM.render(<App3 surprise="I got the Babel transpilation working! by removing the type=text/babel... from the script tag in index.html" />, document.getElementById("app3"));
ReactDOM.render(<Game />, document.getElementById("game"));