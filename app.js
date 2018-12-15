window.addEventListener('load', function() {

  // create a note-list model, with a Note
  var noteList = new NoteList(Note)

  // create the note-list-view
  var noteListView = new NoteListView(noteList)

  var controller = new NotesController(noteList, noteListView, NoteView) // Why don't we instantiate note view?

  //render the list view
  var html = noteListView.render()
  controller.render(html)

})
