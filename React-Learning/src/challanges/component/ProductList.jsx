const ProductList=()=>{
    const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];
    return<div>
{
    products.map(({id,name,price})=><>
    <li key={id}>{name}</li>
    <li key={id}>{price}</li>
    
    </>)
}
    </div>
}
export default ProductList;