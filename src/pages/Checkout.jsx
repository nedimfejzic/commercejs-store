import { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
import Loading from "../components/Loading";

const Checkout = ({ cart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shipingCountries, setShipingCountries] = useState([]);
  const [shipingSubdivsions, setShipingSubdivsions] = useState([]);
  const [shipingOptions, setShipingOptions] = useState([]);
  const [shipingCountry, setShipingCountry] = useState("");
  const [shipingSubdivsion, setShipingSubdivsion] = useState("");
  const [shipingOption, setShipingOption] = useState("");
  const [checkoutToken, setCheckoutToken] = useState(null);

  const fetchShipingCountries = async (tokenid) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      tokenid
    );
    setShipingCountries(countries);
    setShipingCountry(Object.keys(countries)[0]);
  };
  const fetchSubdivisions = async (countyCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countyCode
    );
    setShipingSubdivsions(subdivisions);
    setShipingSubdivsion(Object.keys(subdivisions)[0]);
  };

  const fetchShipingOptions = async (tokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(tokenId, {
      country,
      region,
    });
    setShipingOptions(options);
    setShipingOption(options[0].id);
    setIsLoading(false);

  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        fetchShipingCountries(token.id);
      } catch (error) {
        console.log("Error with  generating token.");
        console.log(error);
      }
    };

    generateToken();
  }, []);

  useEffect(() => {
    if (shipingCountry) fetchSubdivisions(shipingCountry);
  }, [shipingCountry]);

  useEffect(() => {
    if (shipingCountry) {
      if (shipingSubdivsion) {
        fetchShipingOptions(
          checkoutToken.id,
          shipingCountry,
          shipingSubdivsion
        );
      }
    }
  }, [shipingSubdivsion]);

  return (
    <section className="text-gray-600 body-font relative">
      {isLoading && <Loading />}
      {!isLoading&&
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Checkout

            
          </h1>
        
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <p className="font-medium text-xl mb-4">Shiping adress:</p>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="name" className="text-gray-500 font-light">
                  Name
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="name"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="surname" className="text-gray-500 font-light">
                  Surname
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="surname"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="surname"
                  placeholder="Your surname"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="adress" className="text-gray-500 font-light">
                  Adress
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="adress"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="adress"
                  placeholder="Your adress"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="email" className="text-gray-500 font-light">
                  Email
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="city" className="text-gray-500 font-light">
                  City
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="city"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="city"
                  placeholder="Your city"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label htmlFor="zip" className="text-gray-500 font-light">
                  Zip / Postal code
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="zip"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="zip"
                  placeholder="Your zip/postal code"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label className="text-gray-700" htmlFor="country">
                  Shiping country
                  <span className="text-red-500 required-dot">*</span>
                  <select
                    id="country"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="country"
                    value={shipingCountry}
                    onChange={(e) => {
                      setShipingCountry(e.target.value);
                    }}
                  >
                    {Object.entries(shipingCountries).map(([key, val], i) => (
                      <option key={key} value={key}>
                        {val}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className=" relative ">
                <label className="text-gray-700" htmlFor="subdivision">
                  Shiping subdivisions
                  <span className="text-red-500 required-dot">*</span>
                  <select
                    id="subdivision"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="subdivision"
                    value={shipingSubdivsion}
                    onChange={(e) => {
                      setShipingSubdivsion(e.target.value);
                    }}
                  >
                    {Object.entries(shipingSubdivsions).map(([key, val], i) => (
                      <option key={key} value={key}>
                        {val}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="p-2 w-full">
              <div className=" relative ">
                <label className="text-gray-700" htmlFor="subdivision">
                  Shiping option
                  <span className="text-red-500 required-dot">*</span>
                  <select
                    id="subdivision"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="subdivision"
                    value={shipingSubdivsion}
                    onChange={(e) => {
                      setShipingSubdivsion(e.target.value);
                    }}
                  >
                    {shipingOptions
                      .map((sO) => ({
                        id: sO.id,
                        label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                      }))
                      .map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
            </div>

            
            <div className="p-2 w-full flex flex-col text-left  my-8">
                      <h4>Summary: </h4>

                      {!checkoutToken && ( <p className='animate-bounce'>Loading...</p> )} {!checkoutToken}

                      {checkoutToken && (
                        checkoutToken.live.line_items.map((product)=>(
                          <p key={product.name}>{product.name} - {product.quantity} - TOTAL: {product.line_total.formatted_with_symbol}</p>
                            
                           ))
                           
                      )}

                          {checkoutToken &&
                          
<h5>Total: <span className='font-semibold text-indigo-800'>{checkoutToken.live.subtotal.formatted_with_symbol}</span></h5>
}


            </div>

            <div className="p-2 w-full flex  mt-8">
            <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Back
              </button>

              <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
}
    </section>
  );
};

export default Checkout;
