import React, { useEffect, useState } from "react";
import { productData } from "../../../Static/data";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const sortedData = productData?.sort((a, b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData?.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;