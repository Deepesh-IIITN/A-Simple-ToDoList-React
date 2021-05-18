import React from "react";

export default function AddItem(probs) {
  return (
    <form className="form-inline" onSubmit={probs.add} id="form-id">
      <div className="form-group mb-2">
        <input type="text" className="form-control" name="work" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
}
