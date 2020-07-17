import { useBusinessesNY, useBusinessesManufacturing, useBusinesses, useSearch } from "./BusinessProvider.js"
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

const companySearchResultArticle = document.querySelector(".foundCompanies")

    document
            .querySelector("#companySearch")
            .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            
               
            const foundBusiness = useSearch(keyPressEvent.target.value)

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                <h3><b>${foundBusiness.companyName}</b></h3>
                ${foundBusiness.addressFullStreet}
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });