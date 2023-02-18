import React from "react";

import storeItems from "../../data/items.json";
import StoreItem from "../../components/StoreItem";

const Store = () => {
  
  return (
    <React.Fragment>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {storeItems.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Store;
