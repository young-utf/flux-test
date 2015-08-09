/**
 * Created by youngmoon on 8/8/15.
 */

var React = require('react');
var Header = require('./header/app-header');

var Template = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        );
    }
});

module.exports = Template;