import React from "react";
import { Route } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

function OddPages() {
  return (
    <Route>
      <DropdownButton className="pages" title="Odd Pages">
        <Dropdown.Item href="/page_1">
          Page 1
        </Dropdown.Item>
        <br />
        <Dropdown.Item href="/page_3">
          Page 3
        </Dropdown.Item>
      </DropdownButton>
    </Route>
  );
}

export default OddPages;