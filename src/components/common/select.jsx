import React from "react";
const Select = ({ label, search }) => {
  return (
    <>
      <label>{label}</label>
      <div className="input-group">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {search && (
          <div className="input-group-addon input-group-button col-auto mb-1 px-1">
            <button
              type="button"
              id="show-contact-modal-button"
              className="btn btn-primary"
            >
              {search}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
