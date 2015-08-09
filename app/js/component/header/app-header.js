/**
 * Created by youngmoon on 8/8/15.
 */

var React = require('react');
var CartSummary = require('./app-summary');

var Header = React.createClass({
    render: function () {
        return (
            <div className="row">
            	<div className="col-sm-6">
                    <h1>Lets Shop</h1>
            	</div>
                <div className="col-sm-2 col-sm-push-3">
                    <CartSummary></CartSummary>
                </div>
            </div>
        );
    }
});

module.exports = Header;