

const products = [
    // camperas
    {
        id: "campera-01",
        titulo: "campera 01",
        img: "./img/camperas/01.jpg ",
        categoria: "Camperas",
        precio: 1000,
        stock: 11
    },
    {
        id: "abrigo-02",
          
        titulo: "Abrigo 02",
        img: "./img/camperas/02.jpg",
        categoria: "Camperas",
        precio: 1000,
        stock: 10
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        img: "./img/camperas/03.jpg",
        categoria: "Camperas",
        precio: 1000,
        stock: 13
    },
    
    // remeras
    {
        id: "remera-01",
        titulo: "Remera 01",
        img: "./img/remeras/01.jpg",
        categoria: "Remeras",
        precio: 1000,
        stock: 15
    },
    {
        id: "remera-02",
        titulo: "Remera 02",
        img: "./img/remeras/02.jpg",
        categoria: "Remeras",
        precio: 1000,
        stock: 12
    },
    {
        id: "remera-03",
        titulo: "Remera 03",
        img: "./img/remeras/03.jpg",
        categoria: "Remeras",
        precio: 1000,
        stock: 7
    },
    
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        img: "./img/pantalones/01.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 10
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        img: "./img/pantalones/02.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 12
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        img: "./img/pantalones/03.jpg",
        categoria: "pantalones",
        precio: 1000,
        stock: 8
    },
    
];

export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

