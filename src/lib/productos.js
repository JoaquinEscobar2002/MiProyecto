/* const products = [
    {
        "id": 1,
        "name": "Taza de cafe",
        "price": "400",
        "stock": 14,
        "description": "Es una taza de cafe",
        "category": "cocina",
        "img": "https://abanicobazar.com/wp-content/uploads/2023/05/bdc0bae8-145f-4c3d-914c-ab26d5460345-PhotoRoom.png-PhotoRoom.png"
    },
    {
        "id": 2,
        "name": "Mouse",
        "price": "700",
        "stock": 10,
        "description": "Es un mouse para pc",
        "category": "pc",
        "img": "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-anywhere-3s/product-gallery/graphite/mx-anywhere-3s-mouse-top-view-graphite.png?v=1"
    },
    {
        "id": 3,
        "name": "Tupper",
        "price": "650",
        "stock": 20,
        "description": "Es un tupper de plastico",
        "category": "cocina",
        "img": "https://tiendup.b-cdn.net/business/48/products/WGQ6AD_60426f58b31d1_large.jpg"
    },
    {
        "id": 4,
        "name": "Taza de cafe",
        "price": "400",
        "stock": 14,
        "description": "Es una taza de cafe",
        "category": "cocina",
        "img": "https://abanicobazar.com/wp-content/uploads/2023/05/bdc0bae8-145f-4c3d-914c-ab26d5460345-PhotoRoom.png-PhotoRoom.png"
    },
    {
        "id": 5,
        "name": "Estufa",
        "price": "1500",
        "stock": 14,
        "description": "Es una estufa muy calida",
        "category": "hogar",
        "img": "https://i0.wp.com/casauniversal.com.ar/wp3/wp-content/uploads/2022/03/ESTUFA-A-CUARZO-TILCARA-VERTICAL-STD.png"
    }
] */


import { collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
import { db } from "./config"

const productosRef = collection(db, "productos");



export const getProducts = async (category) => {
    const q = category ? query(productosRef, where('category','==', category)) : productosRef

/*     return new Promise((resolve) => {
        setTimeout(() => {
            resolve(_products)
        }, 500)
    }) */


    let products = [];
    const querySnapshot = await getDocs(q)


    querySnapshot.forEach((doc) => {
        products = [...products, { ...doc.data(), id: doc.id}];
    });
    return products;


}

export const getProductById = async (Id) => {

    const document = doc(db, "productos", Id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return { id: docSnap.id, ...docSnap.data()};

    return null;


}

