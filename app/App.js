/** @jsx React.DOM */

var React = require('react');
var {RouteHandler} = require('react-router');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;

var Header = require('./Header');

var App = React.createClass({
    render: function() {

        return (
            <div>
                <Header/>
                <div className="Content">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;
