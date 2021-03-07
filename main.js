// Text Area
var textArea = document.getElementById('text-area')

function setLocal(name, value) {
    localStorage.setItem(name, value)
}

textArea.addEventListener('keydown', () => {
    setLocal('bloco', textArea.value)
})

function cFont(size) {
    textArea.style.fontSize = `${size}px`
    setLocal('font-size', `${size}px`)
}

function nFont(name) {
    textArea.style.fontFamily = name
    setLocal('font-name', name)
}

function tFont(type) {
    textArea.style.color = 'red'
}

function cLine(line) {
    textArea.style.textDecoration = line
    setLocal('font-line', line)
}

function cColor(color) {
    textArea.style.color = color
    setLocal('font-color', color)
}


if (typeof (Storage) !== "undefined") {

    textArea.innerHTML = localStorage.getItem('bloco')
    textArea.style.fontSize = localStorage.getItem('font-size')
    textArea.style.fontFamily = localStorage.getItem('font-name')
    textArea.style.textDecoration = localStorage.getItem('font-line')
    textArea.style.color = localStorage.getItem('font-color')

} else {
    alert('Seu navegador não suporta Storage!')
}


function deleteText() {
    
    if (textArea.value !== '') {
        if (confirm('Deseja realmente limpar todo o Bloco de Notas?')) {
            textArea.value = ''
            setLocal('bloco', textArea.value)
        }
    } else {
        alert('Não á nada para se limpar!')
    }

}

function copyText() {
    if (textArea.value !== '') {
        textArea.select()
        textArea.setSelectionRange(1, 99999)
        document.execCommand("copy")

        alert('O conteúdo do Bloco de Notas foi copiado e está pronto para ser colado em algum outro lugar!')
    } else {
        alert('O Bloco de Notas está vazio, sendo assim não é possível copiar!')
    }

}
