import { products } from '../tempData/productos'

export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export function fetchDataById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === parseInt(id)))
    }, 2000)
  })
}

//Función para llamar a la lista completa
//Función para obtener detalle
//Función para llamar por categoría
//Función para crear ordenes
