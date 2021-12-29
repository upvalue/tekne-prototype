import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type At = Node & {
  __typename?: 'At';
  atId: Scalars['String'];
  atName: Scalars['String'];
  /** Reads and enables pagination through a set of `AtNode`. */
  atNodesByAtId: AtNodesConnection;
  atType: AtType;
  createdAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type AtAtNodesByAtIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AtNodeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};

/** A condition to be used against `At` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AtCondition = {
  /** Checks for equality with the object’s `atId` field. */
  atId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `atName` field. */
  atName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `atType` field. */
  atType?: InputMaybe<AtType>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `At` */
export type AtInput = {
  atId: Scalars['String'];
  atName: Scalars['String'];
  atType: AtType;
  createdAt: Scalars['Datetime'];
};

export type AtNode = Node & {
  __typename?: 'AtNode';
  /** Reads a single `At` that is related to this `AtNode`. */
  atByAtId?: Maybe<At>;
  atId: Scalars['String'];
  atType: AtType;
  createdAt?: Maybe<Scalars['Datetime']>;
  data: Scalars['JSON'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Note` that is related to this `AtNode`. */
  noteByNoteId?: Maybe<Note>;
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A condition to be used against `AtNode` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AtNodeCondition = {
  /** Checks for equality with the object’s `atId` field. */
  atId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `atType` field. */
  atType?: InputMaybe<AtType>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `AtNode` */
export type AtNodeInput = {
  atId: Scalars['String'];
  atType: AtType;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  data: Scalars['JSON'];
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `AtNode`. Fields that are set will be updated. */
export type AtNodePatch = {
  atId?: InputMaybe<Scalars['String']>;
  atType?: InputMaybe<AtType>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  data?: InputMaybe<Scalars['JSON']>;
  noteId?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `AtNode` values. */
export type AtNodesConnection = {
  __typename?: 'AtNodesConnection';
  /** A list of edges which contains the `AtNode` and cursor to aid in pagination. */
  edges: Array<AtNodesEdge>;
  /** A list of `AtNode` objects. */
  nodes: Array<Maybe<AtNode>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AtNode` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AtNode` edge in the connection. */
export type AtNodesEdge = {
  __typename?: 'AtNodesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AtNode` at the end of the edge. */
  node?: Maybe<AtNode>;
};

/** Methods to use when ordering `AtNode`. */
export enum AtNodesOrderBy {
  AtIdAsc = 'AT_ID_ASC',
  AtIdDesc = 'AT_ID_DESC',
  AtTypeAsc = 'AT_TYPE_ASC',
  AtTypeDesc = 'AT_TYPE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  Natural = 'NATURAL',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `At`. Fields that are set will be updated. */
export type AtPatch = {
  atId?: InputMaybe<Scalars['String']>;
  atName?: InputMaybe<Scalars['String']>;
  atType?: InputMaybe<AtType>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
};

export enum AtType {
  Timer = 'TIMER',
  Unset = 'UNSET',
  Yesno = 'YESNO',
  YesnoTimer = 'YESNO_TIMER'
}

/** A connection to a list of `At` values. */
export type AtsConnection = {
  __typename?: 'AtsConnection';
  /** A list of edges which contains the `At` and cursor to aid in pagination. */
  edges: Array<AtsEdge>;
  /** A list of `At` objects. */
  nodes: Array<Maybe<At>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `At` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `At` edge in the connection. */
export type AtsEdge = {
  __typename?: 'AtsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `At` at the end of the edge. */
  node?: Maybe<At>;
};

/** Methods to use when ordering `At`. */
export enum AtsOrderBy {
  AtIdAsc = 'AT_ID_ASC',
  AtIdDesc = 'AT_ID_DESC',
  AtNameAsc = 'AT_NAME_ASC',
  AtNameDesc = 'AT_NAME_DESC',
  AtTypeAsc = 'AT_TYPE_ASC',
  AtTypeDesc = 'AT_TYPE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `At` mutation. */
export type CreateAtInput = {
  /** The `At` to be created by this mutation. */
  at: AtInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the create `AtNode` mutation. */
export type CreateAtNodeInput = {
  /** The `AtNode` to be created by this mutation. */
  atNode: AtNodeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `AtNode` mutation. */
export type CreateAtNodePayload = {
  __typename?: 'CreateAtNodePayload';
  /** Reads a single `At` that is related to this `AtNode`. */
  atByAtId?: Maybe<At>;
  /** The `AtNode` that was created by this mutation. */
  atNode?: Maybe<AtNode>;
  /** An edge for our `AtNode`. May be used by Relay 1. */
  atNodeEdge?: Maybe<AtNodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Note` that is related to this `AtNode`. */
  noteByNoteId?: Maybe<Note>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `AtNode` mutation. */
export type CreateAtNodePayloadAtNodeEdgeArgs = {
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};

/** The output of our create `At` mutation. */
export type CreateAtPayload = {
  __typename?: 'CreateAtPayload';
  /** The `At` that was created by this mutation. */
  at?: Maybe<At>;
  /** An edge for our `At`. May be used by Relay 1. */
  atEdge?: Maybe<AtsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `At` mutation. */
export type CreateAtPayloadAtEdgeArgs = {
  orderBy?: InputMaybe<Array<AtsOrderBy>>;
};

/** All input for the create `KnexMigration` mutation. */
export type CreateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnexMigration` to be created by this mutation. */
  knexMigration: KnexMigrationInput;
};

/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayload = {
  __typename?: 'CreateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was created by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnexMigrationsLock` to be created by this mutation. */
  knexMigrationsLock: KnexMigrationsLockInput;
};

/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayload = {
  __typename?: 'CreateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was created by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the create `Note` mutation. */
export type CreateNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Note` to be created by this mutation. */
  note: NoteInput;
};

/** The output of our create `Note` mutation. */
export type CreateNotePayload = {
  __typename?: 'CreateNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Note` that was created by this mutation. */
  note?: Maybe<Note>;
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Note` mutation. */
export type CreateNotePayloadNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<NotesOrderBy>>;
};

/** All input for the create `NoteRevision` mutation. */
export type CreateNoteRevisionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `NoteRevision` to be created by this mutation. */
  noteRevision: NoteRevisionInput;
};

/** The output of our create `NoteRevision` mutation. */
export type CreateNoteRevisionPayload = {
  __typename?: 'CreateNoteRevisionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Note` that is related to this `NoteRevision`. */
  noteByNoteId?: Maybe<Note>;
  /** The `NoteRevision` that was created by this mutation. */
  noteRevision?: Maybe<NoteRevision>;
  /** An edge for our `NoteRevision`. May be used by Relay 1. */
  noteRevisionEdge?: Maybe<NoteRevisionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `NoteRevision` mutation. */
export type CreateNoteRevisionPayloadNoteRevisionEdgeArgs = {
  orderBy?: InputMaybe<Array<NoteRevisionsOrderBy>>;
};

/** All input for the create `Tag` mutation. */
export type CreateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Tag` to be created by this mutation. */
  tag: TagInput;
};

/** All input for the create `TagNote` mutation. */
export type CreateTagNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `TagNote` to be created by this mutation. */
  tagNote: TagNoteInput;
};

/** The output of our create `TagNote` mutation. */
export type CreateTagNotePayload = {
  __typename?: 'CreateTagNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TagNote` that was created by this mutation. */
  tagNote?: Maybe<TagNote>;
  /** An edge for our `TagNote`. May be used by Relay 1. */
  tagNoteEdge?: Maybe<TagNotesEdge>;
};


/** The output of our create `TagNote` mutation. */
export type CreateTagNotePayloadTagNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<TagNotesOrderBy>>;
};

/** The output of our create `Tag` mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was created by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our create `Tag` mutation. */
export type CreateTagPayloadTagEdgeArgs = {
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** All input for the `deleteAtByAtId` mutation. */
export type DeleteAtByAtIdInput = {
  atId: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteAtByAtName` mutation. */
export type DeleteAtByAtNameInput = {
  atName: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteAt` mutation. */
export type DeleteAtInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `At` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteAtNodeByAtIdAndNoteIdAndPath` mutation. */
export type DeleteAtNodeByAtIdAndNoteIdAndPathInput = {
  atId: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  path: Scalars['JSON'];
};

/** All input for the `deleteAtNode` mutation. */
export type DeleteAtNodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AtNode` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `AtNode` mutation. */
export type DeleteAtNodePayload = {
  __typename?: 'DeleteAtNodePayload';
  /** Reads a single `At` that is related to this `AtNode`. */
  atByAtId?: Maybe<At>;
  /** The `AtNode` that was deleted by this mutation. */
  atNode?: Maybe<AtNode>;
  /** An edge for our `AtNode`. May be used by Relay 1. */
  atNodeEdge?: Maybe<AtNodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAtNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Note` that is related to this `AtNode`. */
  noteByNoteId?: Maybe<Note>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `AtNode` mutation. */
export type DeleteAtNodePayloadAtNodeEdgeArgs = {
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};

/** The output of our delete `At` mutation. */
export type DeleteAtPayload = {
  __typename?: 'DeleteAtPayload';
  /** The `At` that was deleted by this mutation. */
  at?: Maybe<At>;
  /** An edge for our `At`. May be used by Relay 1. */
  atEdge?: Maybe<AtsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAtId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `At` mutation. */
export type DeleteAtPayloadAtEdgeArgs = {
  orderBy?: InputMaybe<Array<AtsOrderBy>>;
};

/** All input for the `deleteKnexMigrationById` mutation. */
export type DeleteKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnexMigration` mutation. */
export type DeleteKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayload = {
  __typename?: 'DeleteKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnexMigrationId?: Maybe<Scalars['ID']>;
  /** The `KnexMigration` that was deleted by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the `deleteKnexMigrationsLockByIndex` mutation. */
export type DeleteKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
};

/** All input for the `deleteKnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayload = {
  __typename?: 'DeleteKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnexMigrationsLockId?: Maybe<Scalars['ID']>;
  /** The `KnexMigrationsLock` that was deleted by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `deleteNoteByNoteId` mutation. */
export type DeleteNoteByNoteIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
};

/** All input for the `deleteNoteByTitle` mutation. */
export type DeleteNoteByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteNote` mutation. */
export type DeleteNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Note` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Note` mutation. */
export type DeleteNotePayload = {
  __typename?: 'DeleteNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedNoteId?: Maybe<Scalars['ID']>;
  /** The `Note` that was deleted by this mutation. */
  note?: Maybe<Note>;
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Note` mutation. */
export type DeleteNotePayloadNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<NotesOrderBy>>;
};

/** All input for the `deleteNoteRevisionByNoteIdAndNoteRevisionId` mutation. */
export type DeleteNoteRevisionByNoteIdAndNoteRevisionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  noteRevisionId: Scalars['Int'];
};

/** All input for the `deleteNoteRevision` mutation. */
export type DeleteNoteRevisionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `NoteRevision` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `NoteRevision` mutation. */
export type DeleteNoteRevisionPayload = {
  __typename?: 'DeleteNoteRevisionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedNoteRevisionId?: Maybe<Scalars['ID']>;
  /** Reads a single `Note` that is related to this `NoteRevision`. */
  noteByNoteId?: Maybe<Note>;
  /** The `NoteRevision` that was deleted by this mutation. */
  noteRevision?: Maybe<NoteRevision>;
  /** An edge for our `NoteRevision`. May be used by Relay 1. */
  noteRevisionEdge?: Maybe<NoteRevisionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `NoteRevision` mutation. */
export type DeleteNoteRevisionPayloadNoteRevisionEdgeArgs = {
  orderBy?: InputMaybe<Array<NoteRevisionsOrderBy>>;
};

/** All input for the `deleteTagByTagId` mutation. */
export type DeleteTagByTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tagId: Scalars['String'];
};

/** All input for the `deleteTagByTagName` mutation. */
export type DeleteTagByTagNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tagName: Scalars['String'];
};

/** All input for the `deleteTag` mutation. */
export type DeleteTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTagNoteByNoteIdAndTagIdAndPath` mutation. */
export type DeleteTagNoteByNoteIdAndTagIdAndPathInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  tagId: Scalars['String'];
};

/** All input for the `deleteTagNote` mutation. */
export type DeleteTagNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TagNote` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `TagNote` mutation. */
export type DeleteTagNotePayload = {
  __typename?: 'DeleteTagNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTagNoteId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TagNote` that was deleted by this mutation. */
  tagNote?: Maybe<TagNote>;
  /** An edge for our `TagNote`. May be used by Relay 1. */
  tagNoteEdge?: Maybe<TagNotesEdge>;
};


/** The output of our delete `TagNote` mutation. */
export type DeleteTagNotePayloadTagNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<TagNotesOrderBy>>;
};

/** The output of our delete `Tag` mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTagId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was deleted by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our delete `Tag` mutation. */
export type DeleteTagPayloadTagEdgeArgs = {
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

export type KnexMigration = Node & {
  __typename?: 'KnexMigration';
  batch?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  migrationTime?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationCondition = {
  /** Checks for equality with the object’s `batch` field. */
  batch?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `migrationTime` field. */
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `KnexMigration` */
export type KnexMigrationInput = {
  batch?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `KnexMigration`. Fields that are set will be updated. */
export type KnexMigrationPatch = {
  batch?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `KnexMigration` values. */
export type KnexMigrationsConnection = {
  __typename?: 'KnexMigrationsConnection';
  /** A list of edges which contains the `KnexMigration` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsEdge>;
  /** A list of `KnexMigration` objects. */
  nodes: Array<Maybe<KnexMigration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigration` edge in the connection. */
export type KnexMigrationsEdge = {
  __typename?: 'KnexMigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigration` at the end of the edge. */
  node?: Maybe<KnexMigration>;
};

export type KnexMigrationsLock = Node & {
  __typename?: 'KnexMigrationsLock';
  index: Scalars['Int'];
  isLocked?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigrationsLock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationsLockCondition = {
  /** Checks for equality with the object’s `index` field. */
  index?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isLocked` field. */
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `KnexMigrationsLock` */
export type KnexMigrationsLockInput = {
  index?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `KnexMigrationsLock`. Fields that are set will be updated. */
export type KnexMigrationsLockPatch = {
  index?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `KnexMigrationsLock` values. */
export type KnexMigrationsLocksConnection = {
  __typename?: 'KnexMigrationsLocksConnection';
  /** A list of edges which contains the `KnexMigrationsLock` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsLocksEdge>;
  /** A list of `KnexMigrationsLock` objects. */
  nodes: Array<Maybe<KnexMigrationsLock>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigrationsLock` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigrationsLock` edge in the connection. */
export type KnexMigrationsLocksEdge = {
  __typename?: 'KnexMigrationsLocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigrationsLock` at the end of the edge. */
  node?: Maybe<KnexMigrationsLock>;
};

/** Methods to use when ordering `KnexMigrationsLock`. */
export enum KnexMigrationsLocksOrderBy {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `KnexMigration`. */
export enum KnexMigrationsOrderBy {
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `At`. */
  createAt?: Maybe<CreateAtPayload>;
  /** Creates a single `AtNode`. */
  createAtNode?: Maybe<CreateAtNodePayload>;
  /** Creates a single `KnexMigration`. */
  createKnexMigration?: Maybe<CreateKnexMigrationPayload>;
  /** Creates a single `KnexMigrationsLock`. */
  createKnexMigrationsLock?: Maybe<CreateKnexMigrationsLockPayload>;
  /** Creates a single `Note`. */
  createNote?: Maybe<CreateNotePayload>;
  /** Creates a single `NoteRevision`. */
  createNoteRevision?: Maybe<CreateNoteRevisionPayload>;
  /** Creates a single `Tag`. */
  createTag?: Maybe<CreateTagPayload>;
  /** Creates a single `TagNote`. */
  createTagNote?: Maybe<CreateTagNotePayload>;
  /** Deletes a single `At` using its globally unique id. */
  deleteAt?: Maybe<DeleteAtPayload>;
  /** Deletes a single `At` using a unique key. */
  deleteAtByAtId?: Maybe<DeleteAtPayload>;
  /** Deletes a single `At` using a unique key. */
  deleteAtByAtName?: Maybe<DeleteAtPayload>;
  /** Deletes a single `AtNode` using its globally unique id. */
  deleteAtNode?: Maybe<DeleteAtNodePayload>;
  /** Deletes a single `AtNode` using a unique key. */
  deleteAtNodeByAtIdAndNoteIdAndPath?: Maybe<DeleteAtNodePayload>;
  /** Deletes a single `KnexMigration` using its globally unique id. */
  deleteKnexMigration?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigration` using a unique key. */
  deleteKnexMigrationById?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigrationsLock` using its globally unique id. */
  deleteKnexMigrationsLock?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `KnexMigrationsLock` using a unique key. */
  deleteKnexMigrationsLockByIndex?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `Note` using its globally unique id. */
  deleteNote?: Maybe<DeleteNotePayload>;
  /** Deletes a single `Note` using a unique key. */
  deleteNoteByNoteId?: Maybe<DeleteNotePayload>;
  /** Deletes a single `Note` using a unique key. */
  deleteNoteByTitle?: Maybe<DeleteNotePayload>;
  /** Deletes a single `NoteRevision` using its globally unique id. */
  deleteNoteRevision?: Maybe<DeleteNoteRevisionPayload>;
  /** Deletes a single `NoteRevision` using a unique key. */
  deleteNoteRevisionByNoteIdAndNoteRevisionId?: Maybe<DeleteNoteRevisionPayload>;
  /** Deletes a single `Tag` using its globally unique id. */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTagByTagId?: Maybe<DeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTagByTagName?: Maybe<DeleteTagPayload>;
  /** Deletes a single `TagNote` using its globally unique id. */
  deleteTagNote?: Maybe<DeleteTagNotePayload>;
  /** Deletes a single `TagNote` using a unique key. */
  deleteTagNoteByNoteIdAndTagIdAndPath?: Maybe<DeleteTagNotePayload>;
  /** Updates a single `At` using its globally unique id and a patch. */
  updateAt?: Maybe<UpdateAtPayload>;
  /** Updates a single `At` using a unique key and a patch. */
  updateAtByAtId?: Maybe<UpdateAtPayload>;
  /** Updates a single `At` using a unique key and a patch. */
  updateAtByAtName?: Maybe<UpdateAtPayload>;
  /** Updates a single `AtNode` using its globally unique id and a patch. */
  updateAtNode?: Maybe<UpdateAtNodePayload>;
  /** Updates a single `AtNode` using a unique key and a patch. */
  updateAtNodeByAtIdAndNoteIdAndPath?: Maybe<UpdateAtNodePayload>;
  /** Updates a single `KnexMigration` using its globally unique id and a patch. */
  updateKnexMigration?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigration` using a unique key and a patch. */
  updateKnexMigrationById?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigrationsLock` using its globally unique id and a patch. */
  updateKnexMigrationsLock?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `KnexMigrationsLock` using a unique key and a patch. */
  updateKnexMigrationsLockByIndex?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `Note` using its globally unique id and a patch. */
  updateNote?: Maybe<UpdateNotePayload>;
  /** Updates a single `Note` using a unique key and a patch. */
  updateNoteByNoteId?: Maybe<UpdateNotePayload>;
  /** Updates a single `Note` using a unique key and a patch. */
  updateNoteByTitle?: Maybe<UpdateNotePayload>;
  updateNotePlus: UpdateNoteReturn;
  /** Updates a single `NoteRevision` using its globally unique id and a patch. */
  updateNoteRevision?: Maybe<UpdateNoteRevisionPayload>;
  /** Updates a single `NoteRevision` using a unique key and a patch. */
  updateNoteRevisionByNoteIdAndNoteRevisionId?: Maybe<UpdateNoteRevisionPayload>;
  /** Updates a single `Tag` using its globally unique id and a patch. */
  updateTag?: Maybe<UpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTagByTagId?: Maybe<UpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTagByTagName?: Maybe<UpdateTagPayload>;
  /** Updates a single `TagNote` using its globally unique id and a patch. */
  updateTagNote?: Maybe<UpdateTagNotePayload>;
  /** Updates a single `TagNote` using a unique key and a patch. */
  updateTagNoteByNoteIdAndTagIdAndPath?: Maybe<UpdateTagNotePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAtArgs = {
  input: CreateAtInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAtNodeArgs = {
  input: CreateAtNodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationArgs = {
  input: CreateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationsLockArgs = {
  input: CreateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateNoteRevisionArgs = {
  input: CreateNoteRevisionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTagNoteArgs = {
  input: CreateTagNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAtArgs = {
  input: DeleteAtInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAtByAtIdArgs = {
  input: DeleteAtByAtIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAtByAtNameArgs = {
  input: DeleteAtByAtNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAtNodeArgs = {
  input: DeleteAtNodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAtNodeByAtIdAndNoteIdAndPathArgs = {
  input: DeleteAtNodeByAtIdAndNoteIdAndPathInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationArgs = {
  input: DeleteKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationByIdArgs = {
  input: DeleteKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockArgs = {
  input: DeleteKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockByIndexArgs = {
  input: DeleteKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNoteByNoteIdArgs = {
  input: DeleteNoteByNoteIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNoteByTitleArgs = {
  input: DeleteNoteByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNoteRevisionArgs = {
  input: DeleteNoteRevisionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNoteRevisionByNoteIdAndNoteRevisionIdArgs = {
  input: DeleteNoteRevisionByNoteIdAndNoteRevisionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagByTagIdArgs = {
  input: DeleteTagByTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagByTagNameArgs = {
  input: DeleteTagByTagNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagNoteArgs = {
  input: DeleteTagNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagNoteByNoteIdAndTagIdAndPathArgs = {
  input: DeleteTagNoteByNoteIdAndTagIdAndPathInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAtArgs = {
  input: UpdateAtInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAtByAtIdArgs = {
  input: UpdateAtByAtIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAtByAtNameArgs = {
  input: UpdateAtByAtNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAtNodeArgs = {
  input: UpdateAtNodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAtNodeByAtIdAndNoteIdAndPathArgs = {
  input: UpdateAtNodeByAtIdAndNoteIdAndPathInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationArgs = {
  input: UpdateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationByIdArgs = {
  input: UpdateKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockArgs = {
  input: UpdateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockByIndexArgs = {
  input: UpdateKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNoteByNoteIdArgs = {
  input: UpdateNoteByNoteIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNoteByTitleArgs = {
  input: UpdateNoteByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNotePlusArgs = {
  body: Scalars['String'];
  noteId: Scalars['String'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNoteRevisionArgs = {
  input: UpdateNoteRevisionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNoteRevisionByNoteIdAndNoteRevisionIdArgs = {
  input: UpdateNoteRevisionByNoteIdAndNoteRevisionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagByTagIdArgs = {
  input: UpdateTagByTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagByTagNameArgs = {
  input: UpdateTagByTagNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagNoteArgs = {
  input: UpdateTagNoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagNoteByNoteIdAndTagIdAndPathArgs = {
  input: UpdateTagNoteByNoteIdAndTagIdAndPathInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Note = Node & {
  __typename?: 'Note';
  /** Reads and enables pagination through a set of `AtNode`. */
  atNodesByNoteId: AtNodesConnection;
  body: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  noteId: Scalars['String'];
  /** Reads and enables pagination through a set of `NoteRevision`. */
  noteRevisionsByNoteId: NoteRevisionsConnection;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
};


export type NoteAtNodesByNoteIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AtNodeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};


export type NoteNoteRevisionsByNoteIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<NoteRevisionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NoteRevisionsOrderBy>>;
};

/** A condition to be used against `Note` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NoteCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `Note` */
export type NoteInput = {
  body: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  noteId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
};

/** Represents an update to a `Note`. Fields that are set will be updated. */
export type NotePatch = {
  body?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  noteId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type NoteRevision = Node & {
  __typename?: 'NoteRevision';
  body: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Note` that is related to this `NoteRevision`. */
  noteByNoteId?: Maybe<Note>;
  noteId: Scalars['String'];
  noteRevisionId: Scalars['Int'];
};

/**
 * A condition to be used against `NoteRevision` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NoteRevisionCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `noteRevisionId` field. */
  noteRevisionId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `NoteRevision` */
export type NoteRevisionInput = {
  body: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  noteId: Scalars['String'];
  noteRevisionId: Scalars['Int'];
};

/** Represents an update to a `NoteRevision`. Fields that are set will be updated. */
export type NoteRevisionPatch = {
  body?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  noteId?: InputMaybe<Scalars['String']>;
  noteRevisionId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `NoteRevision` values. */
export type NoteRevisionsConnection = {
  __typename?: 'NoteRevisionsConnection';
  /** A list of edges which contains the `NoteRevision` and cursor to aid in pagination. */
  edges: Array<NoteRevisionsEdge>;
  /** A list of `NoteRevision` objects. */
  nodes: Array<Maybe<NoteRevision>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NoteRevision` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `NoteRevision` edge in the connection. */
export type NoteRevisionsEdge = {
  __typename?: 'NoteRevisionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NoteRevision` at the end of the edge. */
  node?: Maybe<NoteRevision>;
};

/** Methods to use when ordering `NoteRevision`. */
export enum NoteRevisionsOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  NoteRevisionIdAsc = 'NOTE_REVISION_ID_ASC',
  NoteRevisionIdDesc = 'NOTE_REVISION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Note` values. */
export type NotesConnection = {
  __typename?: 'NotesConnection';
  /** A list of edges which contains the `Note` and cursor to aid in pagination. */
  edges: Array<NotesEdge>;
  /** A list of `Note` objects. */
  nodes: Array<Maybe<Note>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Note` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Note` edge in the connection. */
export type NotesEdge = {
  __typename?: 'NotesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Note` at the end of the edge. */
  node?: Maybe<Note>;
};

/** Methods to use when ordering `Note`. */
export enum NotesOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `AtNode`. */
  allAtNodes?: Maybe<AtNodesConnection>;
  /** Reads and enables pagination through a set of `At`. */
  allAts?: Maybe<AtsConnection>;
  /** Reads and enables pagination through a set of `KnexMigration`. */
  allKnexMigrations?: Maybe<KnexMigrationsConnection>;
  /** Reads and enables pagination through a set of `KnexMigrationsLock`. */
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>;
  /** Reads and enables pagination through a set of `NoteRevision`. */
  allNoteRevisions?: Maybe<NoteRevisionsConnection>;
  /** Reads and enables pagination through a set of `Note`. */
  allNotes?: Maybe<NotesConnection>;
  /** Reads and enables pagination through a set of `TagNote`. */
  allTagNotes?: Maybe<TagNotesConnection>;
  /** Reads and enables pagination through a set of `Tag`. */
  allTags?: Maybe<TagsConnection>;
  /** Reads a single `At` using its globally unique `ID`. */
  at?: Maybe<At>;
  atByAtId?: Maybe<At>;
  atByAtName?: Maybe<At>;
  /** Reads a single `AtNode` using its globally unique `ID`. */
  atNode?: Maybe<AtNode>;
  atNodeByAtIdAndNoteIdAndPath?: Maybe<AtNode>;
  /** Reads a single `KnexMigration` using its globally unique `ID`. */
  knexMigration?: Maybe<KnexMigration>;
  knexMigrationById?: Maybe<KnexMigration>;
  /** Reads a single `KnexMigrationsLock` using its globally unique `ID`. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Note` using its globally unique `ID`. */
  note?: Maybe<Note>;
  noteByNoteId?: Maybe<Note>;
  noteByTitle?: Maybe<Note>;
  /** Reads a single `NoteRevision` using its globally unique `ID`. */
  noteRevision?: Maybe<NoteRevision>;
  noteRevisionByNoteIdAndNoteRevisionId?: Maybe<NoteRevision>;
  ping: Scalars['String'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Tag` using its globally unique `ID`. */
  tag?: Maybe<Tag>;
  tagByTagId?: Maybe<Tag>;
  tagByTagName?: Maybe<Tag>;
  /** Reads a single `TagNote` using its globally unique `ID`. */
  tagNote?: Maybe<TagNote>;
  tagNoteByNoteIdAndTagIdAndPath?: Maybe<TagNote>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAtNodesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AtNodeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAtsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AtCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AtsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnexMigrationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsLocksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnexMigrationsLockCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNoteRevisionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<NoteRevisionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NoteRevisionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNotesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<NoteCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NotesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagNotesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TagNoteCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagNotesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TagCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAtArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAtByAtIdArgs = {
  atId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAtByAtNameArgs = {
  atName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAtNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAtNodeByAtIdAndNoteIdAndPathArgs = {
  atId: Scalars['String'];
  noteId: Scalars['String'];
  path: Scalars['JSON'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNoteArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNoteByNoteIdArgs = {
  noteId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNoteByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNoteRevisionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNoteRevisionByNoteIdAndNoteRevisionIdArgs = {
  noteId: Scalars['String'];
  noteRevisionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByTagIdArgs = {
  tagId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByTagNameArgs = {
  tagName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagNoteArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagNoteByNoteIdAndTagIdAndPathArgs = {
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  tagId: Scalars['String'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  tagId: Scalars['String'];
  tagName: Scalars['String'];
};

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `tagName` field. */
  tagName?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Tag` */
export type TagInput = {
  createdAt: Scalars['Datetime'];
  tagId: Scalars['String'];
  tagName: Scalars['String'];
};

export type TagNote = Node & {
  __typename?: 'TagNote';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  tagId: Scalars['String'];
};

/** A condition to be used against `TagNote` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagNoteCondition = {
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `TagNote` */
export type TagNoteInput = {
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  tagId: Scalars['String'];
};

/** Represents an update to a `TagNote`. Fields that are set will be updated. */
export type TagNotePatch = {
  noteId?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['JSON']>;
  tagId?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `TagNote` values. */
export type TagNotesConnection = {
  __typename?: 'TagNotesConnection';
  /** A list of edges which contains the `TagNote` and cursor to aid in pagination. */
  edges: Array<TagNotesEdge>;
  /** A list of `TagNote` objects. */
  nodes: Array<Maybe<TagNote>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TagNote` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TagNote` edge in the connection. */
export type TagNotesEdge = {
  __typename?: 'TagNotesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TagNote` at the end of the edge. */
  node?: Maybe<TagNote>;
};

/** Methods to use when ordering `TagNote`. */
export enum TagNotesOrderBy {
  Natural = 'NATURAL',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC'
}

/** Represents an update to a `Tag`. Fields that are set will be updated. */
export type TagPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  tagId?: InputMaybe<Scalars['String']>;
  tagName?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Tag` values. */
export type TagsConnection = {
  __typename?: 'TagsConnection';
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<TagsEdge>;
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<Tag>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tag` edge in the connection. */
export type TagsEdge = {
  __typename?: 'TagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tag` at the end of the edge. */
  node?: Maybe<Tag>;
};

/** Methods to use when ordering `Tag`. */
export enum TagsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC',
  TagNameAsc = 'TAG_NAME_ASC',
  TagNameDesc = 'TAG_NAME_DESC'
}

/** All input for the `updateAtByAtId` mutation. */
export type UpdateAtByAtIdInput = {
  atId: Scalars['String'];
  /** An object where the defined keys will be set on the `At` being updated. */
  atPatch: AtPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateAtByAtName` mutation. */
export type UpdateAtByAtNameInput = {
  atName: Scalars['String'];
  /** An object where the defined keys will be set on the `At` being updated. */
  atPatch: AtPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateAt` mutation. */
export type UpdateAtInput = {
  /** An object where the defined keys will be set on the `At` being updated. */
  atPatch: AtPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `At` to be updated. */
  nodeId: Scalars['ID'];
};

/** All input for the `updateAtNodeByAtIdAndNoteIdAndPath` mutation. */
export type UpdateAtNodeByAtIdAndNoteIdAndPathInput = {
  atId: Scalars['String'];
  /** An object where the defined keys will be set on the `AtNode` being updated. */
  atNodePatch: AtNodePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  path: Scalars['JSON'];
};

/** All input for the `updateAtNode` mutation. */
export type UpdateAtNodeInput = {
  /** An object where the defined keys will be set on the `AtNode` being updated. */
  atNodePatch: AtNodePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AtNode` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `AtNode` mutation. */
export type UpdateAtNodePayload = {
  __typename?: 'UpdateAtNodePayload';
  /** Reads a single `At` that is related to this `AtNode`. */
  atByAtId?: Maybe<At>;
  /** The `AtNode` that was updated by this mutation. */
  atNode?: Maybe<AtNode>;
  /** An edge for our `AtNode`. May be used by Relay 1. */
  atNodeEdge?: Maybe<AtNodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Note` that is related to this `AtNode`. */
  noteByNoteId?: Maybe<Note>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `AtNode` mutation. */
export type UpdateAtNodePayloadAtNodeEdgeArgs = {
  orderBy?: InputMaybe<Array<AtNodesOrderBy>>;
};

/** The output of our update `At` mutation. */
export type UpdateAtPayload = {
  __typename?: 'UpdateAtPayload';
  /** The `At` that was updated by this mutation. */
  at?: Maybe<At>;
  /** An edge for our `At`. May be used by Relay 1. */
  atEdge?: Maybe<AtsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `At` mutation. */
export type UpdateAtPayloadAtEdgeArgs = {
  orderBy?: InputMaybe<Array<AtsOrderBy>>;
};

/** All input for the `updateKnexMigrationById` mutation. */
export type UpdateKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
};

/** All input for the `updateKnexMigration` mutation. */
export type UpdateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayload = {
  __typename?: 'UpdateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was updated by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the `updateKnexMigrationsLockByIndex` mutation. */
export type UpdateKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
};

/** All input for the `updateKnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayload = {
  __typename?: 'UpdateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was updated by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `updateNoteByNoteId` mutation. */
export type UpdateNoteByNoteIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  /** An object where the defined keys will be set on the `Note` being updated. */
  notePatch: NotePatch;
};

/** All input for the `updateNoteByTitle` mutation. */
export type UpdateNoteByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Note` being updated. */
  notePatch: NotePatch;
  title: Scalars['String'];
};

/** All input for the `updateNote` mutation. */
export type UpdateNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Note` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Note` being updated. */
  notePatch: NotePatch;
};

/** The output of our update `Note` mutation. */
export type UpdateNotePayload = {
  __typename?: 'UpdateNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Note` that was updated by this mutation. */
  note?: Maybe<Note>;
  /** An edge for our `Note`. May be used by Relay 1. */
  noteEdge?: Maybe<NotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Note` mutation. */
export type UpdateNotePayloadNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<NotesOrderBy>>;
};

export type UpdateNoteReturn = {
  __typename?: 'UpdateNoteReturn';
  noteId: Scalars['String'];
};

/** All input for the `updateNoteRevisionByNoteIdAndNoteRevisionId` mutation. */
export type UpdateNoteRevisionByNoteIdAndNoteRevisionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  noteRevisionId: Scalars['Int'];
  /** An object where the defined keys will be set on the `NoteRevision` being updated. */
  noteRevisionPatch: NoteRevisionPatch;
};

/** All input for the `updateNoteRevision` mutation. */
export type UpdateNoteRevisionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `NoteRevision` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `NoteRevision` being updated. */
  noteRevisionPatch: NoteRevisionPatch;
};

/** The output of our update `NoteRevision` mutation. */
export type UpdateNoteRevisionPayload = {
  __typename?: 'UpdateNoteRevisionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Note` that is related to this `NoteRevision`. */
  noteByNoteId?: Maybe<Note>;
  /** The `NoteRevision` that was updated by this mutation. */
  noteRevision?: Maybe<NoteRevision>;
  /** An edge for our `NoteRevision`. May be used by Relay 1. */
  noteRevisionEdge?: Maybe<NoteRevisionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `NoteRevision` mutation. */
export type UpdateNoteRevisionPayloadNoteRevisionEdgeArgs = {
  orderBy?: InputMaybe<Array<NoteRevisionsOrderBy>>;
};

/** All input for the `updateTagByTagId` mutation. */
export type UpdateTagByTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tagId: Scalars['String'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** All input for the `updateTagByTagName` mutation. */
export type UpdateTagByTagNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tagName: Scalars['String'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** All input for the `updateTag` mutation. */
export type UpdateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** All input for the `updateTagNoteByNoteIdAndTagIdAndPath` mutation. */
export type UpdateTagNoteByNoteIdAndTagIdAndPathInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  noteId: Scalars['String'];
  path: Scalars['JSON'];
  tagId: Scalars['String'];
  /** An object where the defined keys will be set on the `TagNote` being updated. */
  tagNotePatch: TagNotePatch;
};

/** All input for the `updateTagNote` mutation. */
export type UpdateTagNoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TagNote` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TagNote` being updated. */
  tagNotePatch: TagNotePatch;
};

/** The output of our update `TagNote` mutation. */
export type UpdateTagNotePayload = {
  __typename?: 'UpdateTagNotePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TagNote` that was updated by this mutation. */
  tagNote?: Maybe<TagNote>;
  /** An edge for our `TagNote`. May be used by Relay 1. */
  tagNoteEdge?: Maybe<TagNotesEdge>;
};


/** The output of our update `TagNote` mutation. */
export type UpdateTagNotePayloadTagNoteEdgeArgs = {
  orderBy?: InputMaybe<Array<TagNotesOrderBy>>;
};

/** The output of our update `Tag` mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Tag` that was updated by this mutation. */
  tag?: Maybe<Tag>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our update `Tag` mutation. */
export type UpdateTagPayloadTagEdgeArgs = {
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

export type AllNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNotesQuery = { __typename?: 'Query', allNotes?: { __typename?: 'NotesConnection', nodes: Array<{ __typename?: 'Note', noteId: string, body: any, createdAt: any } | null | undefined> } | null | undefined };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags?: { __typename?: 'TagsConnection', nodes: Array<{ __typename?: 'Tag', tagId: string, tagName: string } | null | undefined> } | null | undefined };

export type UpdateNoteMutationVariables = Exact<{
  noteId: Scalars['String'];
  body: Scalars['String'];
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNotePlus: { __typename?: 'UpdateNoteReturn', noteId: string } };


export const AllNotesDocument = gql`
    query AllNotes {
  allNotes {
    nodes {
      noteId
      body
      createdAt
    }
  }
}
    `;

export function useAllNotesQuery(options: Omit<Urql.UseQueryArgs<AllNotesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllNotesQuery>({ query: AllNotesDocument, ...options });
};
export const AllTagsDocument = gql`
    query AllTags {
  allTags {
    nodes {
      tagId
      tagName
    }
  }
}
    `;

export function useAllTagsQuery(options: Omit<Urql.UseQueryArgs<AllTagsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllTagsQuery>({ query: AllTagsDocument, ...options });
};
export const UpdateNoteDocument = gql`
    mutation UpdateNote($noteId: String!, $body: String!) {
  updateNotePlus(noteId: $noteId, body: $body) {
    noteId
  }
}
    `;

export function useUpdateNoteMutation() {
  return Urql.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument);
};