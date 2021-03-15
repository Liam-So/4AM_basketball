import React, { useState, useEffect } from 'react'
import Topbar from '../../Topbar/Topbar'
import GearProduct from './GearProduct/GearProduct';
import axios from "../../../axios"

function Gear() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const req = await axios.get("/gear");
    
          setProducts(req.data);
        }
    
        fetchData();
      }, []);

    return (
        <>
            <div className="gear">
                <Topbar />
                <div className="subGear">
                    Gear
                </div>
            </div> 

            <div className="flex container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap">
                        {products.map((product) => (
                            <GearProduct key={product.id} product={product} />
                        ))}
                </div>
            </div>
    </>
    )
}

export default Gear
