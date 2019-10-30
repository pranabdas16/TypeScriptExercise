var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log(another.y - another.x);
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 14;
point.draw();
point.getDistance(point);
