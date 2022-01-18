import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
      <Card>
          <header>
              <h2></h2>
          </header>
          <div>
              <p></p>
          </div>
          <footer>
              <Button>Okay</Button>
          </footer>
      </Card>
  )
}

export default ErrorModal;