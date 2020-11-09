class Ground {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        var pos = this.body.position;
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}