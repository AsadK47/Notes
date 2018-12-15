function NotesController (noteList, noteListView, noteView) {
  this.noteList = noteList
  this.noteListView = noteListView
  this.NoteView = noteView

  this._setup()
}

NotesController.prototype = {
  _setup: function () {
    var self = this
    // listen to submit events
    window.addEventListener('submit', function (event) {
      // stop the default, ask the list to create a note, then render
      event.preventDefault()
      self.noteList.createNote(event.target[0].value)
      var html = self.noteListView.render()
      self.render(html)
    })

    window.addEventListener('hashchange', function () {
      // get the hash location
      // find the id
      var noteId = window.location.hash.split('#note/')[1]
      // find the note from the notelist
      var note = self.noteList.findById(noteId)
      // create a noteview
      var noteView = new self.NoteView(note)
      // render the note-view
      var html = noteView.render()
      self.render(html)
    })
  },

  render: function(html) {
    document.getElementById('app').innerHTML = html
  }
}
