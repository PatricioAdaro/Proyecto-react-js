

const products = [
    // camperas
    {
        id: "campera-01",
        titulo: "Campera 01",
        img: "./img/camperas/01.jpg ",
        categoria: "Camperas",
        precio: 1000,
        stock: 11,
        descripcion: "descripcion del producto"
    },
    {
        id: "campera-02",
        titulo: "Campera 02",
        img: "./img/camperas/02.jpg ",
        categoria: "Camperas",
        precio: 1000,
        stock: 10,
        descripcion: "descripcion del producto"
    },
    {
        id: "campera-03",
        titulo: "Campera 03",
        img: "./img/camperas/03.jpg ",
        categoria: "Camperas",
        precio: 1000,
        stock: 13,
        descripcion: "descripcion del producto"
    },
    
    // remeras
    {
        id: "remera-01",
        titulo: "Remera 01",
        img:"./img/remeras/01.jpg ",
        categoria: "Remeras",
        precio: 1000,
        stock: 15,
        descripcion: "descripcion del producto"
    },
    {
        id: "remera-02",
        titulo: "Remera 02",
        img: "./img/remeras/02.jpg ",
        categoria: "Remeras",
        precio: 1000,
        stock: 12,
        descripcion: "descripcion del producto"
    },
    {
        id: "remera-03",
        titulo: "Remera 03",
        img: "./img/remeras/03.jpg ",
        categoria: "Remeras",
        precio: 1000,
        stock: 7,
        descripcion: "descripcion del producto"
    },
    
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        img: "./img/pantalones/01.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 10,
        descripcion: "descripcion del producto"
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        img: "./img/pantalones/02.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 12,
        descripcion: "descripcion del producto"
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        img: "./img/pantalones/03.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 8,
        descripcion: "descripcion del producto"
    },
    
];

export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find( prod => prod.id === productId))
        }, 500)
    })
}

