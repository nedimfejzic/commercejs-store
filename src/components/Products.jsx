import Product from "./Product";

const Products = ({products, onAddToCart}) => {


    return (



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        
        {products.map((product)=><Product product={product} key={product.id} onAddToCart={onAddToCart} />)}
    
    </div>
  </div>
</section>








     );
}
 
export default Products;