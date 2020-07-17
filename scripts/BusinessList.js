import { useBusinessesNY, useBusinessesManufacturing, useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".business")



const addFilteredToDOM = (filteredArray) => {
  
    contentTarget.innerHTML += "<h1>Business List</h1>"
    
    filteredArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );

}

export const BusinessList = () => {
    const nyB = useBusinessesNY()
    addFilteredToDOM(nyB)

    const manuB = useBusinessesManufacturing()
    addFilteredToDOM(manuB) 

    const allB = useBusinesses()
    addFilteredToDOM(allB)

}

