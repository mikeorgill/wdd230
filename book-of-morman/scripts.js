const input1 = " ";
const input2 = " ";
const input3 =  " ";
const input4 = " ";
const input5 = " ";

button.addEventListener('click', function(e){
    let input1 = e.target.dataset;
    screen.value += value;
});

const input = document.getElementById('chapter-input');
const addButton = document.getElementById('add-button');
const chapterList = document.getElementById('chapter-list');

addButton.addEventListener('click', function() {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function() {
      li.remove();
      input.focus();
    });

    li.appendChild(deleteButton);
    chapterList.appendChild(li);

    input.value = '';
    input.focus();
  }
});

