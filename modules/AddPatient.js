/** @jsx React.DOM */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var TextField = mui.TextField;
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var RadioButtonGroup = mui.RadioButtonGroup;
var RadioButton = mui.RadioButton;
var RaisedButton = mui.RaisedButton;

var AddPatient = React.createClass({
    _onActive: function(tab) {
        this.transitionTo(tab.props.route);
    },
    render: function() {
        return (
            <form className="add-patient-form">
                    <Tabs tabWidth="250">
                        <Tab label="Patient Info" >
                            <div className="container">

                                <h4>Personal Information</h4>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <TextField
                                            hintText="Patient Id"
                                            floatingLabelText="Patient Id" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Room Number"
                                            floatingLabelText="Room Number" />
                                    </div>
                                    <div className="col-md-4 gender-selector">
                                        <RadioButtonGroup
                                            name="gender"
                                            defaultSelected="male">
                                            <RadioButton
                                                value="male"
                                                label="Male"
                                                defaultChecked={true}/>
                                            <RadioButton
                                                value="female"
                                                label="Female" />
                                        </RadioButtonGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="First Name"
                                            floatingLabelText="First Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Last Name"
                                            floatingLabelText="Last Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Age"
                                            floatingLabelText="Age" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Address"
                                            floatingLabelText="Address" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="State (ie CA)"
                                            floatingLabelText="State" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Zip Code"
                                            floatingLabelText="Zip Code" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Phone Number"
                                            floatingLabelText="Phone Number" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Email"
                                            floatingLabelText="Email" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="MM/DD/YYYY"
                                            floatingLabelText="Birthday" />
                                    </div>
                                </div>

                                <h4>Emergency Contact Information</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="First Name"
                                            floatingLabelText="First Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Last Name"
                                            floatingLabelText="Last Name" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Relationship (ie Spouse, etc...)"
                                            floatingLabelText="Relationship" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Phone Number"
                                            floatingLabelText="Phone Number" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Phone Number"
                                            floatingLabelText="Alternate Phone Number" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Email"
                                            floatingLabelText="Email" />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="History Report" >
                            <div className="container history-report">
                                <div className="row">
                                    <div className="col-md-12 diagnosis">
                                        <TextField
                                            hintText="Diagnosis"
                                            floatingLabelText="Diagnosis"
                                            multiLine={true} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Attachments"
                                            floatingLabelText="Attachments" />
                                    </div>
                                    <div className="col-md-4 attachment-button">
                                        <RaisedButton secondary={true}>
                                            <span className="mui-raised-button-label">Attach a File</span>
                                        </RaisedButton>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="Discharge Management" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="DC"
                                            floatingLabelText="DC" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="choo"
                                            floatingLabelText="choo" />
                                    </div>
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="CHOO"
                                            floatingLabelText="CHOO" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <TextField
                                            hintText="Ummm"
                                            floatingLabelText="Umm" />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
            </form>
        );
    }
});

module.exports = AddPatient;
