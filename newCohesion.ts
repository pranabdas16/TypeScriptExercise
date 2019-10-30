 class Point{
        x: number ;
        y: number ;
    
        draw(){
            console.log('X: ' + this.x + ', y: ' + this.y);
        }
        getDistance(another: Point){
            console.log(another.y - another.x);
        }
    }
    
    let point: Point = new Point();

    point.x =1;
    point.y = 14;    
    point.draw();
    point.getDistance(point);