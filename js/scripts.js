
const   modal = document.getElementById('modal'),
        openModal = document.getElementById('modal-open'),
        closeModal = document.getElementById('modal-close'),
        modalContent = document.getElementById('modal-content')

// Función cerrar modal
const close = e => {
    e.stopPropagation()
    modalContent.classList.remove('modal--open')
    setTimeout(() => modal.style.visibility = 'hidden',1000)
}


// Abriendo el modal
openModal.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modalContent.classList.add('modal--open')
})

closeModal.addEventListener('click', e => {
    close(e)
})

// Cerrando el modal
modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) close(e)
})


