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

    const mapGlobalId = (arr) => {
        let globals = {} ; 

        arr.forEach(element => {
            if (!(element.globalId in globals)) {
                globals[element.globalId] = element ; 
            }
        });

        return (Object.values(globals).map((product) => (
            <GearProduct key={product.id} product={product} />
        )))
    }

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
                        {/* {products.map((product) => (
                            <GearProduct key={product.id} product={product} />
                        ))}                     */}
                        {mapGlobalId(products)}
                </div>
            </div>
    </>
    )
}

export default Gear
