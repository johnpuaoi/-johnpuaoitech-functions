"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.formatDate = void 0;
// Use for firebase timestamps, pass in time bool to get time back in result
var formatDate = function (timestamp, returnTime) {
    // Get date from timestamp
    var date = new Date(timestamp * 1000);
    // Get Month
    var month = date.getMonth() + 1;
    // Get Day
    var day = date.getDate();
    // Get year
    var year = date.getFullYear();
    // Get hours
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    // Get Minutes
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    if (returnTime) {
        return month + "/" + day + "/" + year + " " + hours + ":" + minutes;
    }
    else {
        return month + "/" + day + "/" + year;
    }
};
exports.formatDate = formatDate;
var isEmptyObject = function (obj) {
    if (Object.entries(obj).length >= 1) {
        return false;
    }
    else {
        return true;
    }
};
exports.isEmptyObject = isEmptyObject;
var emptyObject = {};
var notEmptyObject = {
    test: 'This is not empty',
};
console.log('The Empty object is empty: ', (0, exports.isEmptyObject)(emptyObject));
console.log('The not object is empty: ', (0, exports.isEmptyObject)(notEmptyObject));
//# sourceMappingURL=functions.js.map