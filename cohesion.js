"use strict";
//import * as _ from 'lodash';
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
exports.Point = Point;
var point = new Point();
point.x = 1;
point.y = 14;
point.draw();
