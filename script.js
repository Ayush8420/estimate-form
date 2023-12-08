const items = [...document.querySelectorAll(".ddcontainer .item")].slice(0,3),
itemTitle = items.map(item => item.querySelector(".title")),
ddItem = items.map(item => item.querySelectorAll(".dropdown .drop-item")),
service = itemTitle[1]
itemTitle.forEach(item => item.addEventListener("click",showDropDown))


items[2].querySelectorAll(".dropdown").forEach(item => item.style.display = "none")
items[2].querySelector(".dropdown.null").style.display = "block"


function showDropDown(e){
    if(e.target.parentElement.classList.contains("active")){
        e.target.parentElement.classList.remove("active")
        return;
    }

    items.forEach(item => (item.classList.contains("active") && item.classList.remove("active")))

    e.target.parentElement.classList.add("active")
}

window.onclick = (e)=> {
    if(e.target.closest(".item") == null){

    items.forEach(item => (item.classList.contains("active") && item.classList.remove("active")))
    }
}

ddItem.forEach((item,id) => {
    item.forEach(ddItem => {
        ddItem.addEventListener("click",(e) =>{
            let price = e.target.dataset.price;
            let title = itemTitle[id] //title
            title.textContent = e.target.textContent;
            title.dataset.value = price;
            service.dataset.option

            if(id == 1){
                let option = e.target.dataset.option;

                if(itemTitle[2].dataset.serviceType !== option){
                itemTitle[2].dataset.serviceType = "null";
                items[2].querySelectorAll(".dropdown").forEach(item => item.style.display = "none")
                items[2].querySelector(".dropdown.null").style.display = "block"
                }

                items[2].querySelectorAll(".dropdown").forEach(item => item.style.display = "none")
                items[2].querySelector(".dropdown." + option).style.display = "block";
                itemTitle[2].dataset.serviceType = option;
                itemTitle[2].textContent = "Choose Options"
            }

            setPrice()
        })
    })
})

const itemBtn = document.querySelector(".ddcontainer .item .title.btn span")

function setPrice(){
    const [plan, service, option]  =  itemTitle.map(item => parseInt(item.dataset.value));

    estimate = plan + service + option;

    itemBtn.textContent = estimate;
    
    items.forEach(item => (item.classList.contains("active") && item.classList.remove("active")))

}
