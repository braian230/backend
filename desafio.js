class ProductManager {
    static idGenerator = 1;
    constructor() {
        this.products = [];
    }
    getProducts() {
        return this.products
    }
    addProduct(title, description, price, stock, thumbnail, code) {
        const newProduct = {
            title,
            description,
            price,
            stock,
            thumbnail,
            code: code,
            id: ProductManager.idGenerator++,
        }
        if (this.products.find(product => product.code === newProduct.code)) {
            console.log("Ese producto ya existe")
        } else {
            if (
                newProduct.title === (undefined)
                || newProduct.description === (undefined)
                || newProduct.price === (undefined)
                || newProduct.stock === (undefined)
                || newProduct.thumbnail === (undefined)
                || newProduct.code === (undefined)
            ) {
                console.log("Rellenar formulario")
            } else {
                this.products.push(newProduct)
            }
        }


    }
    getProductById(findId) {
        const findProduct = this.products.find(product => product.code === findId)
        findProduct ? console.log(findProduct) : console.log("No hay ningun producto con ese id")
    }
}

const productManager = new ProductManager()
productManager.addProduct("reloj", "esto es un reloj", 1500, 4, "Imagen", 1)
productManager.addProduct("cadena", "esto es una cadena", 1200, 5, "Imagen", 2)
productManager.addProduct("gorra", "esto es una gorra",8500, 5, "Imagen", 3)

productManager.addProduct("zapatilla", "esto es una zapatilla", 2500, 10, "Imagen", 2)


productManager.getProductById(2)

productManager.getProductById(10)


console.log(productManager.getProducts())