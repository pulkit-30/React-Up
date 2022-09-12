import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
function Result({ name, score }) {
  const history = useHistory();
  useEffect(() => {
    if (!name) {
      history.pushState("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="title">
        {name}, Your Final Score: {score}
      </span>

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to Home Page
      </Button>
    </div>
  );
}

export default Result;
