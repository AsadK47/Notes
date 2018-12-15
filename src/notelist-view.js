function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype = {
  render: function() {
    return [
      "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
      "</form>",
      this.noteList.notes.map(function (note) {
        return [
          "<div>",
            "<a href='#note/" + note.id + "'>" + note.title() + "</a>",
          "</div>"
        ].join('')
      }).join('')
    ].join('')
  }
}
