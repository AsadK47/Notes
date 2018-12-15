function NoteView (note) {
  this.note = note
}

NoteView.prototype = {
  render: function () {
    return [
      "<div>",
        "<p>" + this.note.text + "</p>",
      "</div>"
    ].join('')
  }
}
