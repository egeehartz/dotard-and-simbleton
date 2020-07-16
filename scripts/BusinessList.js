import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".business")

export const BusinessList = () => {
    const businesses = useBusinesses()
    contentTarget.innerHTML = "<h1>Business List</h1>"

    businesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
    
}