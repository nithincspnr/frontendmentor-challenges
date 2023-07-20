import React from "react";

import { Backdrop, Button } from "components";
import "./index.scss";

const ConfirmationDialog = ({ open, onCancel, onDelete }) => {
  if (!open) {
    return null;
  }

  return (
    <Backdrop>
      <div className="dialog-box-wrapper">
        <div className="dialog-box">
          <h2 className="dialog-box__title">Delete comment</h2>
          <p className="dialog-box__content">
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div className="dialog-box__btn-group">
            <Button onClick={onCancel} success>
              NO, CANCEL
            </Button>
            <Button onClick={onDelete} error>
              YES, DELETE
            </Button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ConfirmationDialog;
