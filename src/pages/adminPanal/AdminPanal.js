import React from "react";
import { a } from "react-router-dom";

export default function AdminPanal() {
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <div className="list-group">
              <a
                to="#"
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                The current a item
              </a>
              <a to="#" className="list-group-item list-group-item-action">
                A second a item
              </a>
              <a to="#" className="list-group-item list-group-item-action">
                A third a item
              </a>
              <a to="#" className="list-group-item list-group-item-action">
                A fourth a item
              </a>
              <a className="list-group-item list-group-item-action disabled">
                A disabled a item
              </a>
            </div>
          </div>
          <div className="col">dfs</div>
        </div>
      </div>
    </>
  );
}
