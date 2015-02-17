/** @jsx React.DOM */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var ViewPatient = React.createClass({
    render: function() {
        return (
            <Paper zDepth={1} >
                <div className="container">
                    <h1>View A Patient</h1>
                </div>
            </Paper>
        );
    }
});

module.exports = ViewPatient;
