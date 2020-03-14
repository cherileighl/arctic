//CLASS NOTES
//1.29.2020

//array of objects
const PRODUCTS = [1,2,3,4]

// js for loop - let and const replaced var
for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i]
    console.log(p)
}


for (let p of PRODUCTS) {
    console.log(p)
}

function printP(p) {
    console.log(p)
}

//put this in the statement
const printP = (p, i) => {
    console.log(p)
}

console.log(p.map(printP))

const st = "My products are: " + PRODUCTS.map(printP)

//put function in the statement
const st = "My products are: " + PRODUCTS.map((p, i) => {
    return p
})

//DON'T USE THIS ONE-- 'in' will go through all of the methods and everything in PRODUCTS
for (let p in PRODUCTS) {

}

//this one doesn't work:
//const st = "My products are: " + for (const p of PRODUCTS) {}

//ITERATE THROUGH OBJECT - can't, have to turn it into an array
const PRODUCTS = {
    1: "asdf",
    2: "quer",
    3: "wert",
}

//convert object to an array
Object.values(PRODUCTS).map
Object.keys(PRODUCTS).map

//.filter and .map on arrays
//<bs.Card>
//<bs.Image>, <bs.Text>, <bs.CardImage>
//<Link> - Details button - position: absolute
//image in Details page - position: float-right (still inside flow)
//four images per item media/products
//use mouseover event to change image (initial value = img1)
//change variable with setter
//change 
    //const [imgIndex, setImgIndex] = 
        //React.useState(initialValue) 
//image - <img src={imgIndex + ".png"}

//home.js - 
    // .map(p=) {
//        return <product card product={p} > 
//               </product>
//    }

//ONE PRODUCT CARD WILL PRINT ALL COMPONENTS

//return (
//     { Props.product.name}
// )

