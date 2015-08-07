/**
 * Created by youngmoon on 8/2/15.
 */

var React = require('react');
var AppActions = require('../../actions/app-actions');

var IncreaseToCart = React.createClass({
    handler: function () {
        AppActions.increaseItem(this.props.index);
    },
    render: function () {
        return (
            <button onClick={this.handler}>
                +
            </button>
        );
    }
});

module.exports = IncreaseToCart;