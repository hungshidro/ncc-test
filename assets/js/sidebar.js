const toggle = document.getElementById("toggle");
let clicked = 0;
toggle.onclick(()=>{
    const sidebar = document.getElementById("sidebar-mobile");
    sidebar.classList.remove("hidden")
})

// $("sidebar-mobile").hide();

// $("toggle").click(() => {
//     $("sidebar-mobile").show();
// })