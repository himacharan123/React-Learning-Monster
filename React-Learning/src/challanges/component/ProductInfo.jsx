function ProductInfo() {
    let productDetails = {
        name: "Lenovo Laptop",
        price: "$1200",
        availabilty: "In stock"
    }
    return <div>
        <p>Product Name : {productDetails.name}</p>
        <p>Price :${productDetails.price}</p>
        <p>Availability :{productDetails.availabilty}</p>
    </div>
}
export default ProductInfo;