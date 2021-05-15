let body = document.querySelector("body");
let icon_search = document.getElementById("icon_search");
let search = document.getElementById("search");
let dark_check = document.getElementById("dark_check");

dark_check.onclick=function(){
    body.classList.toggle("dark");
}
icon_search.onclick=function() {
    console.log("icon search")
    search.classList.toggle("big");
    console.log(icon_search.id);
    if (icon_search.id == "icon_search"){
        search.style.zIndex = "10";
        setTimeout(() => {
            icon_search.id = "icon_add";
            icon_search.innerHTML = "add";
            search.style.zIndex = "-1";
        }, 850);
        

        
    }
    else{
        let icon_add = document.getElementById("icon_add");
        icon_add.id = "icon_search";
        icon_search.innerHTML = "search";
        icon_search.style.zIndex = "-2";
        setTimeout(() => {
            icon_search.style.zIndex = "0";
        }, 1000);
        search.value = "";  
    }
}