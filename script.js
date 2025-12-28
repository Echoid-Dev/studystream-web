// ---------- Timetable Save ----------
const table = document.getElementById('timetable');
const saveBtn = document.getElementById('saveBtn');

if(saveBtn){
  window.onload = () => {
    const saved = localStorage.getItem('timetable');
    if(saved) table.innerHTML = saved;
  }

  saveBtn.addEventListener('click', () => {
    localStorage.setItem('timetable', table.innerHTML);
    alert('Timetable saved!');
  });
}

// ---------- Notes Save ----------
const notesArea = document.getElementById('notesArea');
const saveNotes = document.getElementById('saveNotes');

if(saveNotes){
  window.onload = () => {
    const savedNotes = localStorage.getItem('notes');
    if(savedNotes) notesArea.value = savedNotes;
  }

  saveNotes.addEventListener('click', () => {
    localStorage.setItem('notes', notesArea.value);
    alert('Notes saved!');
  });
}
