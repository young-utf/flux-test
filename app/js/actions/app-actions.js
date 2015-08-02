/**
 * Created by youngmoon on 8/2/15.
 */


var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
    addItem: function (item) {
        AppDispatcher.handleViewAction({
            actionsType: AppConstants.ADD_ITEM,
            item: item
        })
    },

    removeItem: function (index) {
        AppDispatcher.handleViewAction({
            actionsType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },

    increaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionsType: AppConstants.INCREASE_ITEM,
            index: index
        })
    },

    decreaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionsType: AppConstants.DECREASE_ITEM,
            index: index
        })
    }
};

module.exports = AppActions;