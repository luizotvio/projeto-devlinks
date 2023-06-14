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
}