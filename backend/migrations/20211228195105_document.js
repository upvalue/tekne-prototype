
exports.up = function (knex) {
  console.log('document up');
  return knex.raw(`
  CREATE TABLE notes(
    note_id TEXT PRIMARY KEY,
    title TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
    revision INT,
    UNIQUE(title)
  );

  CREATE TABLE note_revisions(
    note_revision_id INT, 
    note_id TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    body JSONB NOT NULL,
    CONSTRAINT fk_note FOREIGN KEY(note_id) REFERENCES notes(note_id),
    PRIMARY KEY(note_id, note_revision_id)
  );

  ALTER TABLE notes ADD CONSTRAINT fk_note_rev FOREIGN KEY (note_id, revision) REFERENCES note_revisions(note_id, note_revision_id);

  CREATE TYPE at_type AS ENUM ('unset', 'yesno', 'timer', 'yesno_timer');

  CREATE TABLE ats(
    at_id TEXT NOT NULL,
    at_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    at_type at_type NOT NULL,
    PRIMARY KEY(at_id),
    UNIQUE(at_name)
  );

  CREATE TABLE at_nodes(
    at_id TEXT NOT NULL,
    note_id TEXT NOT NULL,
    path JSONB NOT NULL,
    data JSONB NOT NULL,
    at_type at_type NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE, -- TODO should be not null pending timestamp of editor nodes
    updated_at TIMESTAMP WITH TIME ZONE, -- TODO should be not null pending timestamp of editor nodes
    CONSTRAINT fk_at_node_note FOREIGN KEY(note_id) REFERENCES notes(note_id),
    CONSTRAINT fk_at_node_at FOREIGN KEY(at_id) REFERENCES ats(at_id),
    PRIMARY KEY(at_id, note_id, path)
  );

  CREATE TABLE tags(
    tag_id TEXT NOT NULL,
    tag_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY(tag_id),
    UNIQUE(tag_name)
  );

  CREATE TABLE tag_notes(
    note_id TEXT NOT NULL,
    tag_id TEXT NOT NULL,
    path JSONB NOT NULL,
    PRIMARY KEY(note_id, tag_id, path)
  );

  -- Retrieve a specific note at its latest revision
  CREATE VIEW get_note AS
    SELECT 
      n.note_id,
      nr.body,
      nr.note_revision_id
    FROM notes n
    LEFT JOIN note_revisions nr ON n.note_id = nr.note_id AND n.revision = nr.note_revision_id;

  `);
};

exports.down = function (knex) {
  console.log('document down');
  // nothings
  // heck
};
