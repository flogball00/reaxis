/** @jsx React.DOM */

var React = require('react');
var {RouteHandler, Link} = require('react-router');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var Portal = React.createClass({
    render: function() {
        return (
            <div className="portal">
                <h1 className="text-center">Portal Home</h1>
                <div className="container portal-container">
                    <Link to="add-patient">
                        <RaisedButton label="Add User" secondary={true} />
                    </Link>
                    <Link to="view-patient">
                        <RaisedButton label="nothing yet" secondary={true} />
                    </Link>
                <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = Portal;
