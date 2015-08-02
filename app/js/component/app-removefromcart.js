/**
 * Created by youngmoon on 8/2/15.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var RemoveToCart = React.createClass({
    handler: function () {
        AppActions.removeItem(this.props.index);
    },
    render: function () {
        return (
            <button onClick={this.handler}>
                X
            </button>
        );
    }
});

module.exports = RemoveToCart;