/* Toggle the side navigation */
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");

    if (sidenav.style.width === "250px") {
        // If the side navigation is open, close it
        sidenav.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        // If the side navigation is closed, open it
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}