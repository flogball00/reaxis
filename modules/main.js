var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var Home = require('./Home');
var Portal = require('./Portal');
var App = require('./App');
var AddPatient = require('./AddPatient');
var ViewPatient = require('./ViewPatient');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require('./App.css');
require('./App.less');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Portal}/>
        <Route name="home" path="home" handler={Home} />
        <Route name="portal" path="portal" handler={Portal} >
            <Route name="add-patient" path="patient" handler={AddPatient} />
            <Route name="view-patient" path="patient/number" handler={ViewPatient} />
        </Route>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});