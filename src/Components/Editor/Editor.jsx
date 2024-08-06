import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

const Editor = ({ setValue }) => {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setValue(quill.root.innerHTML); // Get innerHTML using quill
      });
    }
  }, [quill]);

  return (
    <div className="child:font-[Dana-Regular!important]">
      <div dir="rtl" ref={quillRef}></div>
    </div>
  );
};

export default Editor;
