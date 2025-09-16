import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Autoformat,
  TextTransformation,
  Autosave,
  Indent,
  IndentBlock,
  BlockQuote,
  Bookmark,
  Minimap,
  Clipboard,
  Emoji,
  Mention,
  Font,
  FindAndReplace,
  Fullscreen,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  LinkImage,
  Alignment,
  List,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function App() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: "GPL",
        plugins: [
          List,
          Image,
          ImageToolbar,
          ImageCaption,
          ImageStyle,
          ImageResize,
          LinkImage,
          Heading,
          Fullscreen,
          FindAndReplace,
          Font,
          Essentials,
          Paragraph,
          Bold,
          Code,
          Italic,
          Strikethrough,
          Subscript,
          Superscript,
          Underline,
          Autoformat,
          TextTransformation,
          Autosave,
          Indent,
          IndentBlock,
          BlockQuote,
          Bookmark,
          Minimap,
          Clipboard,
          Emoji,
          Mention,
          Alignment,
        ],
        toolbar: [
          "fullscreen",
          "Bookmark",
          "|",
          "undo",
          "redo",
          "|",
          "heading",
          "fontSize",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "|",
          "bold",
          "italic",
          "Underline",
          "Code",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "BlockQuote",
          "insertImage",
          "|",
          "alignment",
          "indent",
          "outdent",
          "|",
          "emoji",
        ],
        initialData: "<p>Hello from CKEditor 5 in React!</p>",
        //configuration for autosave
        autosave: {
          waitingTime: 5000,
          save(editor) {}, //Need Config More
        },
        indentBlock: {
          offset: 1,
          unit: "em",
        },
        //configuration for minimap
        minimap: {
          // Configuration.
        },
        fontFamily: {
          // Configuration.
        },
        fontColor: {
          // Configuration.
        },
        findAndReplace: {
          uiType: "dropdown",
        },
        fullscreen: {
          menuBar: {
            isVisible: false,
          },
        },
        image: {
          insert: {
            // This is the default configuration, you do not need to provide
            // this configuration key if the list content and order reflects your needs.
            integrations: ["upload", "assetManager", "url"],
            type: "auto",
          },
          toolbar: [
            "imageStyle:block",
            "imageStyle:side",
            "|",
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "linkImage",
          ],
        },
      }}
    />
  );
}

export default App;
