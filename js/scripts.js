
const   openModal = document.getElementById('open'),
        modal = document.getElementById('modal'),
        modalContent = document.getElementById('modal-content')


openModal.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modalContent.classList.add('modal--open')
})


// openModal.addEventListener('click', () =>modalContent.classList.add('modal--open'))


// modal.addEventListener('click', e => {
//     if (e.target.classList.contains('modal')) modal.classList.remove('modal--open')
// })