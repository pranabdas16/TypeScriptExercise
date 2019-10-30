//import * as _ from 'lodash';

 class Point{
        x: number ;
        y: number ;
    
        draw(){
            console.log('X: ' + this.x + ', y: ' + this.y)
        }
        getDistance(another: Point){
            //..
        }
    }
    
    let point: Point = new Point();

    point.x =1;
    point.y = 14;    
    point.draw();

    export {Point};


