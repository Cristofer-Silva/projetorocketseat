function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

   /* para mudar a foto, use o código:
   
   if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar.png')
    } else{
        img.setAttribute('src', './assets/avatar-whitebg.png')
    }
    */
}