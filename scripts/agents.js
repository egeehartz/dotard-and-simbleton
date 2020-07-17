export const agents = (businessObject) => {
    return `
        <article class="businessList">
            <h2 class="agent__name">${businessObject.fullName}</h2>
            <div>
            ${businessObject.company}<br>
            ${businessObject.phoneNumber}
            </div>
            
        </article>
    `
}