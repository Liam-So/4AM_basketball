import axios from "../../../axios";

export const arrayOfItems = (basket) => {
    let items = Object.values(basket) ; 
    let result = [] ; 
    let newItem = {}; 

    items.forEach(item => {      
      newItem = {"unit_amount": {"currency_code": "CAD"}}
      newItem["name"] = item.title ; 
      newItem["quantity"] = item.quantity ; 
      newItem.unit_amount["value"] = item.price ;
      result.push(newItem) ; 
      newItem = {} ; 
    })
    
    return result ; 
}

export const checkStockForItem = (requestData, basketItem) => {
    let inStock = false ; 

    if (requestData.sku - basketItem.quantity >= 0) {
      inStock = true ;
    }

    return inStock ; 
}


export const getBasketStock = async (basketData) => {
    let inStock = false;

    for (const basketItem of basketData) {
      if (basketItem.type === 'GR') {
        const req = await axios.get(`/gear/${basketItem._id}`) ; 
        inStock = checkStockForItem(req.data, basketItem);
      }

      if (basketItem.type === "DNT") {
        inStock = true ; 
      }

      if (basketItem.type === "RGT") {
        const req = await axios.get(`/registration/${basketItem._id}`) ; 
        inStock = checkStockForItem(req.data, basketItem) ; 
      }
    }

    return inStock ; 
}

export const updateStock = async (basketData) => {
    for (const basketItem of basketData) {
      if (basketItem.type === 'RGT') {
        const req = await axios.get(`/registration/${basketItem._id}`) ; 

        let serverStock = req.data.sku ; 

        await axios.put(`/registration/${basketItem._id}`, {
          "sku": serverStock - basketItem.quantity
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log("there was an error")
        })
      }
      if (basketItem.type === 'GR') {

        console.log(basketItem)

        const req = await axios.get(`/gear/${basketItem._id}`) ; 

        let serverStock = req.data.sku ; 

        console.log(serverStock)

        await axios.put(`/gear/${basketItem._id}`, {
          "sku": serverStock - basketItem.quantity 
        }) 
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log("there was an error")
        })
      }
    }
  }