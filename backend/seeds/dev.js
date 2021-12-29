// Generate a sample note

const uuid = require('short-uuid');

const translator = uuid();

exports.seed = function (knex) {
  const noteUuid = `note-${translator.new()}`
  const noteBody = `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"basic editor test."}]}]}`;

  return knex.raw(`
  INSERT INTO notes (note_id,  created_at, updated_at, body)
    VALUES('${noteUuid}', now(), now(), '${noteBody}');
  `)
};
