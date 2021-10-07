import { MdDelete } from "react-icons/md";


const CartItem = ({ item,handleRemoveFromCart,handleUpdateCartQty }) => {
  return (
    <tr className="h-24 border-b border-t border-gray-200 text-gray-800 ">
      <td className=" px-4 py-2 ">
        <div className="flex-row gap-4 flex justify-left items-center ">
          <div className="flex-shrink-0">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src={item.image.url}
                className="mx-auto object-cover rounded-full h-24 w-24 "
              />
            </a>
          </div>
          <div className=" flex flex-col">
            <span className="text-gray-600 dark:text-white text-lg font-medium">
              {item.name}
            </span>
            <span className="text-gray-400 text-xs">
              {item.price.formatted_with_code}
            </span>
          </div>
        </div>
      </td>
      <td className=" px-4 py-2 text-center">
        <div className="flex items-center justify-center">
          <button
            
            onClick={()=>{handleUpdateCartQty(item.id, item.quantity-1)}}
            type="button"
            className="border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-3 py-1"
          >
            -
          </button>
          <button
            type="button"
            className="border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-1 "
          >
            {item.quantity}
          </button>
          <button
          
          onClick={()=>{handleUpdateCartQty(item.id, item.quantity+1)}}
            type="button"
            className="border-t border-b border-r text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-3 py-1"
          >
            +
          </button>
        </div>
      </td>
      <td className=" px-4 py-2 text-center font-medium text-lg">
        <div className='flex justify-center '>
         <span className='flex items-center'> {item.line_total.formatted_with_symbol}</span>

          <button
            onClick={()=>{handleRemoveFromCart(item.id)}}
            type="button"
            className="py-2 px-4 flex  items-center text-xl"
          >
            <MdDelete className='text-2xl'/>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;

{
  /*



               
            

            

*/
}
