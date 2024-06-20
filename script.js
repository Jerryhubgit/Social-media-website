const articles = document.querySelectorAll(".side_bar article");
const notification_bar = document.querySelector(".notification_bar");
const notification_section = document.querySelector(".notification_section"); 
const all_names_of_creators = document.querySelectorAll(".head_post b");
const top_input = document.querySelector("header input[type='search']");
const main_post_container = document.querySelectorAll(".post_result .result");


// =====================search post================================
top_input.addEventListener("keyup", () => {
    main_post_container.forEach(container => {
        const creator_names = container.querySelector(".head_post .user_info b").innerHTML.toLowerCase();
        const search_for_creator = top_input.value.toLowerCase();

        if(creator_names.indexOf(search_for_creator) != -1){
            container.style.display = "block";
        }else{
            container.style.display = "none";
        }
    })

})

// ================End of search post====================


// const removeActive = () => {
    // articles.forEach(article => {
        // article.addEventListener("click", () => {
            // article.classList.remove("active");
        // })
    // })
// }
articles.forEach(article => {
    article.addEventListener("click", () => {
        if(article.className = "active"){
            article.classList.remove(active)
        }else{
            article.classList.add(active);
        }
    })
})



notification_section.addEventListener("click", () => {
    if(notification_bar.style.display == "none"){
        notification_bar.style.display = "initial";
    }else{
        notification_bar.style.display = "none";
    }
} )


// -----------------------------Right user info ------------------------------
const incomingMsgs = document.querySelectorAll(".msg_display .user_profile");
const searchMessage = document.querySelector(".input_msg .input");

console.log(incomingMsgs)

searchMessage.addEventListener("keyup", () => {
    const mySearch = searchMessage.value.toLowerCase();

    incomingMsgs.forEach(message => {
        const names = message.querySelector(".user_info b").textContent.toLowerCase();
        // console.log(names)
        if(names.indexOf(mySearch) !== -1){
            message.style.display = "flex"
        }else{
            message.style.display = "none"
        }
    })
    

})



// ====================================Filter post===========================


