import React, { useState, useEffect } from "react";
import BankByIdComponent from"./BankByIdComponent"

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <h1 class="navbar-brand">Bank accounts API</h1>
        <BankByIdComponent></BankByIdComponent>
      </nav>
    </>
  );
}

export default Navbar;
