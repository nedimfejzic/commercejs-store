import {MdOutlineAddShoppingCart} from 'react-icons/md'

const Product = ({ product, onAddToCart }) => {
  //const {id, price, name, description, image} = product;

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block rounded-2xl"
          src={product.image.url}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>

        <div className="flex justify-between">
          <p className="mt-1 font-medium">
            {product.price.formatted_with_code}
          </p>

         

          
<button 
  onClick={() => onAddToCart(product.id, 1)}
type="button" className="py-2 px-4 flex justify-center items-center text-xl">
   <MdOutlineAddShoppingCart/>
</button>

        </div>
      </div>
    </div>
  );
};

export default Product;
