/** @jsx React.DOM */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var Toolbar = mui.Toolbar;
var RaisedButton = mui.RaisedButton;
var {Link} = require('react-router');

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <header>
                    <Toolbar>
                        <Paper zDepth={1}>
                            <div className="container">

                                    <ul className="list-inline menu-bar">
                                        <li>
                                            <Link to="home">
                                                <div className="col-md-1 row-header">
                                                Home
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="portal">
                                                <div className="col-md-1 row-header">
                                                Portal
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>

                            </div>
                        </Paper>
                    </Toolbar>
                </header>
            </div>
        );
    }
});

module.exports = Header;
