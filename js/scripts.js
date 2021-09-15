
const   openModal = document.getElementById('open'),
        modal = document.getElementById('modal')


openModal.addEventListener('click', () => modal.classList.add('modal--open'))


modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--open')
})