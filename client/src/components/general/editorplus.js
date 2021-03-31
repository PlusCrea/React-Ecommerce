import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function EditorPlus(props) {
  const handleEditorChange = (content, editor) => {
    //console.log("Content was updated:", content);
    if (props.onEditorChange) props.onEditorChange(content);
  };

  return (
    <div>
      {" "}
      <Editor
              initialValue={props.initialValue}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify |  image |\
           bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}

export default EditorPlus;
