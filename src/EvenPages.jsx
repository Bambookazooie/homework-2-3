import React from "react";
import { Route } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

function EvenPages() {
  return (
    <Route>
      <DropdownButton className="pages" title="Even Pages">
        <Dropdown.Item href="/page_2">
          Page 2
        </Dropdown.Item>
        <br />
        <Dropdown.Item href="/page_4">
          Page 4
        </Dropdown.Item>
      </DropdownButton>
    </Route>
  );
}

export default EvenPages;