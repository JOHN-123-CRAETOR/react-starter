import React from "react";

function NoteCard(props) {

  function highlightText(text, search) {

    if (!search) return text;

    const escapedSearch = search.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const regex = new RegExp(`(${escapedSearch})`, "gi");

    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span
          key={i}
          style={{
            backgroundColor: "yellow",
            fontWeight: "bold",
            color: "black"
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "10px",
        background: props.darkMode ? "#1e1e1e" : "#fafafa",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        wordWrap: "break-word"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3>
          {highlightText(props.title, props.search)}
        </h3>

        <button
          onClick={() => props.onPin(props.id)}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          {props.pinned ? "📌" : "📍"}
        </button>
      </div>

      <p
        style={{
          color: "orange",
          fontWeight: "bold"
        }}
      >
        {props.category}
      </p>

      {props.editingId === props.id ? (
        <>
          <textarea
            value={props.editedContent}
            onChange={(e) =>
              props.setEditedContent(e.target.value)
            }
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "10px",
              height: "80px"
            }}
          />

          <button
            onClick={() => props.onSave(props.id)}
            style={{
              marginTop: "10px",
              marginRight: "10px",
              background: "green",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Save
          </button>

          <button
            onClick={props.onCancel}
            style={{
              marginTop: "10px",
              background: "gray",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <p
          onClick={() =>
            props.onEdit(props.id, props.content)
          }
        >
          {highlightText(props.content, props.search)}
        </p>
      )}

      <small style={{ color: "gray" }}>
        {props.date}
      </small>

      <br />

      <button
        onClick={() => props.onDelete(props.id)}
        style={{
          marginTop: "10px",
          background: "red",
          color: "white",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;