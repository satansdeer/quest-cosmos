require('../stylesheets/main.sass')

var React = require('react');
var ReactDOM = require('react-dom');

var HelloSayer = React.createClass({
    render: function() {
        return (<p>Hello TEST!</p>);
    }
});

window.onload = () =>
  ReactDOM.render(<HelloSayer />, document.getElementById('test'));
