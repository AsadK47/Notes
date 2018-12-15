function NoteList (noteModel) {
  this.noteModel = noteModel
  this.notes = []
}

NoteList.prototype = {
  createNote: function (text) {
    var note = new this.noteModel (text)
    this.notes.push(note)
  },

  findById: function (id) {
    return this.notes.find(function (note) {
      return note.id == id
    })
  }
}
