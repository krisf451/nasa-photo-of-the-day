import React, { useState, useEffect } from "react";

export default function NasaPhoto(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>TEST PHOTO CONTENT</h1>
      <img src="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"></img>
    </div>
  );
}
