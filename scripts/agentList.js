import { usePurchasingAgents } from "./BusinessProvider.js";
import {agents} from "./agents.js"



const contentTarget = document.querySelector(".agents")



const addFilteredToDOM = (mappedArray) => {
  
    contentTarget.innerHTML += "<h1>Agent List</h1>"
    
    mappedArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += agents(businessObject)
        }
    );

}


export const agentsList = () => {
    const agentStuff = usePurchasingAgents()
    addFilteredToDOM(agentStuff)
   
}