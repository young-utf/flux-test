/**
 * Created by youngmoon on 8/2/15.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var DecreaseToCart = React.createClass({
    handler: function () {
        AppActions.decreaseItem(this.props.index);
    },
    render: function () {
        return (
            <button onClick={this.handler}>
                -
            </button>
        );
    }
});

module.exports = DecreaseToCart;