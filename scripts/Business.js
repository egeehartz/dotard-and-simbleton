export const Business = (businessObject) => {
    return `
        <article class="businessList">
            <h2 class="business__name">${businessObject.companyName}</h2>
        <div class="business__address">
            ${businessObject.addressFullStreet} <br>
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
        </div>
        </section>
    `
}

/*
<article class="business--newYork">

        </article>
*/