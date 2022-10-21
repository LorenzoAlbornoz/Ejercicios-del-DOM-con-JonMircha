import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_Scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("assets/mario-bros.mp3", "#activar-alarma", "#desactivar-alarma")
    countdown("countdown", "October 17, 2023, 11:10:00", "Feliz cumpleaños!!! 😊")
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube","(min-width:1024px)", `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia("gmaps","(min-width:1024px)", `<a href="https://goo.gl/maps/gzZMWT8FRcvjSeSe9" target="_black" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661630623397!2d-99.16759935!3d19.4270206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2sar!4v1666187118954!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    
})

d.addEventListener("keydown", (e) => {
    shortcuts(e),
    moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus()