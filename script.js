function toggleMode() {
    const html = document.documentElement

    // Aqui foi criada a condicional 
    // if(html.classList.contains('light')) {
    //  html.classList.remove('light') 
    //} else {
    // html.classList.add('light')
    // }
    // aqui simplifica o código de cima

    html.classList.toggle('light')

    // alterar foto do avatar
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, add a img light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar-dark.png")
    }
}