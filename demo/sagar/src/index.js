import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Clock} from './Clock';
import {Toggle} from './Toggle';
import {LoginControl} from './Login';
import {NumberList} from './NumberList';
import {NameForm} from './NameForm';
import {Calculator} from './Calculator';

import registerServiceWorker from './registerServiceWorker';

/***************************
 * JSX element introduction
 **************************/

const welcome = <h4 className="big">Welcome to Solar System</h4>;

const root = (<div>
    {welcome}
  </div>
);
ReactDOM.render(root, document.getElementById('root'));

/***************************
 * JSX element as a Objects
 **************************/

const welcomeCopy = React.createElement('h4', {
  className: 'big'
}, 'Welcome to Solar System');

const jsxObj = (<div>
    <h3>JSX Represents Objects</h3>
    {welcomeCopy}
  </div>
);
ReactDOM.render(jsxObj, document.getElementById('jsxObj'));

/******************************
 * JSX element as a Attributes
 *****************************/

const cosmosUrl = "https://cosmosmagazine.com/";
const milkyWay = <nav>I am a Cosmos</nav>;

const jsxAttr = (<div>
    <h3>Specifying Attributes with JSX</h3>
    <a href={cosmosUrl}>
      {milkyWay}
    </a>
  </div>
);
ReactDOM.render(jsxAttr, document.getElementById('jsxAttr'));

/**********************************
 * JSX element as a child elements
 *********************************/

const planetLi = {
  smallest: <li>Mercury</li>,
  life: <li>earth</li>,
  biggest: <li>Jupiter</li>,
  beauty: <li>Saturn</li>,
  far: <li>Neptune</li>
};

const planetList = (<ul>
  {planetLi.smallest}
  {planetLi.life}
  {planetLi.biggest}
  {planetLi.beauty}
  {planetLi.far}
</ul>);

const jsxChild = (<div>
    <h3>Specifying Children with JSX</h3>
    {planetList}
  </div>
);
ReactDOM.render(jsxChild, document.getElementById('jsxChild'));

/******************************
 * JSX element as a Expression
 *****************************/
const planetPlain = {
  smallest: "Mercury",
  life: "earth",
  biggest: "Jupiter",
  beauty: "Saturn",
  far: "Neptune"
};

function concatPlanet(planet) {
  return planet.smallest + ' ' + planet.biggest;
}

function getGreeting(planet) {
  if (planet) {
    return <p>Hello, {concatPlanet(planet)}!</p>;
  }
  return <p>Hello, Stranger.</p>;
}

const jsxExpr = (<div>
    <h3>JSX is an Expression Too</h3>
    Concat smallest and biggest Planet: {getGreeting(planetPlain)}
  </div>
);
ReactDOM.render(jsxExpr, document.getElementById('jsxExpr'));

/***********************************
 * Component and Props introduction
 **********************************/

const world = <Welcome name="India"/>;

function Welcome(props) {
  return <h4>I Love my {props.name}</h4>;
}

const componentProps = (<div>
    <h3>Components and Props</h3>
    {world}
  </div>
);
ReactDOM.render(componentProps, document.getElementById('componentProps'));

/**********************
 * Component Composing
 **********************/

function Country(props) {
  return <h4>Country name: {props.name}</h4>;
}

const countries = (<div>
  <Country name="India"/>
  <Country name="China"/>
  <Country name="USA"/>
</div>
);

const componentCompose = (<div>
    <h3>Composing Components</h3>
    {countries}
  </div>
);
ReactDOM.render(componentCompose, document.getElementById('componentCompose'));

/***********************
 * Component Extracting
 ***********************/

function Comment(props) {
  return (<div className="Comment">
    <UserInfo user={props.author}/>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {props.date}
    </div>
  </div>
  );
}

function Avatar(props) {
  return (<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>);
}

function UserInfo(props) {
  return (<div className="UserInfo">
    <Avatar user={props.user}/>
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
  );
}

const userObj = {
  avatarUrl: "https://fakeimg.pl/100/",
  name: "sagargajera"
}

const componentExtract = (<div>
    <h3>Extracting Components</h3>
    <Comment author={userObj} text="how are you?" date="24th July,2018"/>
  </div>
);
ReactDOM.render(componentExtract, document.getElementById('componentExtract'));

/**********************
 * State and Lifecycle
 **********************/

const state = (<div>
    <h3>State and Lifecycle</h3>
    <Clock/>
  </div>
);
ReactDOM.render(state, document.getElementById('state'));

/******************
 * Handling Events
 *****************/

const events = (<div>
    <h3>Handling Events</h3>
    <Toggle/>
  </div>
);
ReactDOM.render(events, document.getElementById('events'));

/************************
 * Conditional Rendering
 ************************/
const conditionalRendering = (<div>
    <h3>Conditional Rendering</h3>
    <LoginControl />
  </div>
);
ReactDOM.render(conditionalRendering,document.getElementById('conditionalRendering'));

/************************
 * Lists and Keys
 ************************/
const numbers = [1, 2, 3, 4, 5];
const listKeys = (<div>
    <h3>Lists and Keys</h3>
    <NumberList numbers={numbers}  />
  </div>
);
ReactDOM.render(listKeys,document.getElementById('listKeys'));

/************************
 * Forms
 ************************/
const forms = (<div>
    <h3>Forms</h3>
    <NameForm />
  </div>
);
ReactDOM.render(forms,document.getElementById('forms'));

/************************
 * Lifting State Up
 ************************/
const stateUp = (<div>
    <h3>Lifting State Up</h3>
    <Calculator />
  </div>
);
ReactDOM.render(stateUp,document.getElementById('stateUp'));

/*************************************
 * Updating required DOM changes only
 ************************************/

function tick() {
  const element = (<div>
    <h3>Updating the Rendered Element</h3>
    Time is {new Date().toLocaleTimeString()}.
  </div>
  );
  ReactDOM.render(element, document.getElementById('date'));
}

setInterval(tick, 1000);

registerServiceWorker();
