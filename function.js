class clothes {
    constructor(color, size, price){
    this.color = color
    this.size = size
    this.price = price  
    }

    printInfo(){
        console.log(`color : ${this.color}, size : ${this.size}, price : ${this.price}`)
    }
}

const coat = new clothes('navy', 'L', 200000)

coat.printInfo()