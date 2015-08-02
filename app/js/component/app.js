/**
 * Created by youngmoon on 8/2/15.
 */

var React = require('react');
var Catalog = require('../component/app-catalog');
var Cart = require('../component/app-cart');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Lets Shop</h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart />
            </div>
        );
    }
});

module.exports = App;