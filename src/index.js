console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice;
};

window
    .fetch(`${baseUrl}/api/avo`)
    .then( (response) => response.json() )
    .then((responseJson) => {
        const allItems = [];
        responseJson.data.forEach((item) => {

            const image = document.createElement("img");
            image.src = `${baseUrl}/${item.image}`;
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            const textContainer = document.createElement("div");
            textContainer.className = "text-center md:text-left";

            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "font-medium text-lg ";

            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);
            price.className = "text-gray-600";

            const container = document.createElement("div");
                        
            textContainer.append(title,price);
            container.append(image, textContainer);
            container.className = "card-container md:flex bg-white  rounded-lg p-6 hover:bg-gray-300";
            
            allItems.push(container);
            
        });
        appNode.append(...allItems);
    }); 
