import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard.jsx";

function NoteApp() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  const [notes, setNotes] = useState(() => {

    const savedNotes =
      localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [editedContent, setEditedContent] =
    useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  const [sortOrder, setSortOrder] =
    useState("newest");

  useEffect(() => {

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

  }, [notes]);

  function handleAddNotes() {

    if (
      title.trim() === "" ||
      content.trim() === ""
    ) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      pinned: false,
      date: new Date().toLocaleString(),
      timestamp: Date.now()
    };

    setNotes((prev) => [newNote, ...prev]);

    setTitle("");
    setContent("");
    setCategory("Personal");
  }

  function handleDeleteNote(id) {

    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  }

  function handleEditContent(id, currentContent) {

    setEditingId(id);

    setEditedContent(currentContent);
  }

  function handleSaveEdit(id) {

    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              content: editedContent
            }
          : note
      )
    );

    setEditingId(null);

    setEditedContent("");
  }

  function handleCancelEdit() {

    setEditingId(null);

    setEditedContent("");
  }

  function handlePinNote(id) {

    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned
            }
          : note
      )
    );
  }

  const filteredNotes = notes

    .filter(
      (note) =>

        note.title
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        note.content
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        note.category
          .toLowerCase()
          .includes(search.toLowerCase())
    )

    .sort((a, b) => {

      if (a.pinned && !b.pinned)
        return -1;

      if (!a.pinned && b.pinned)
        return 1;

      if (sortOrder === "newest") {

        return b.timestamp - a.timestamp;
      }

      return a.timestamp - b.timestamp;
    });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial",
        background: darkMode
          ? "#121212"
          : "white",
        color: darkMode
          ? "white"
          : "black",
        minHeight: "100vh",
        transition: "0.3s"
      }}
    >
      <h1>📝 Notes App</h1>

      <button
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        {darkMode
          ? "☀ Light Mode"
          : "🌙 Dark Mode"}
      </button>

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search notes..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Enter title..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <textarea
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Enter content..."
        style={{
          width: "100%",
          padding: "8px",
          height: "80px",
          marginBottom: "10px"
        }}
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      >
        <option>Personal</option>
        <option>Work</option>
        <option>School</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      >
        <option value="newest">
          Newest First
        </option>

        <option value="oldest">
          Oldest First
        </option>
      </select>

      <button
        onClick={handleAddNotes}
        style={{
          width: "100%",
          padding: "10px",
          background: darkMode
            ? "#333"
            : "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Add Note
      </button>

      <hr style={{ margin: "20px 0" }} />

      {filteredNotes.length === 0 ? (

        <p
          style={{
            color: "gray",
            textAlign: "center"
          }}
        >
          No notes yet...
        </p>

      ) : (

        filteredNotes.map((note) => (

          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            category={note.category}
            pinned={note.pinned}
            date={note.date}
            search={search}
            editingId={editingId}
            editedContent={editedContent}
            setEditedContent={
              setEditedContent
            }
            onDelete={handleDeleteNote}
            onEdit={handleEditContent}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            onPin={handlePinNote}
            darkMode={darkMode}
          />
        ))

      )}
    </div>
  );
}

export default NoteApp;