const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragstart({ target }) {
  target.classList.add('hold');
  setTimeout(() => target.classList.add('hide'), 0);
}

function dragend({ target }) {
  target.classList = 'item';
}

function dragover(e) {
  e.preventDefault();
}

function dragenter({ target }) {
  target.classList.add('hovered');
}


function dragleave({ target }) {
  target.classList.remove('hovered');
}

function dragdrop({ target }) {
  target.classList.remove('hovered');
  target.append(item);
}