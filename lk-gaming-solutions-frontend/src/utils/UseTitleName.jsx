import { useEffect } from "react";

const UseTitleName = (title) => {
  useEffect(() => {
    document.title = title === "" ? "LK Gaming Solutions" : title + " | LK Gaming Solutions";
  }, [title])
}

export default UseTitleName;