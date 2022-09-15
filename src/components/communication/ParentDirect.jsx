import React from "react";
import ChildDirect from "./ChildDirect";

export default props => {
  return (
    <div>
      <ChildDirect name="Junior" age={20} nerd={true} />
      <ChildDirect name="Gabriel" age={17} nerd={false} />
    </div>
  )
}