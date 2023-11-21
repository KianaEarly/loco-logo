class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.text = text
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="130" y="125" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `<rect width="200" height="200" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="100" y="100" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" />
        <text x="40" y="50" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = {Triangle, Square, Circle}