import React    from "react";
import template from "./Venue.jsx";

class Venue extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Venue;
