import React, { useEffect, useRef } from "react";
import Quill from "quill";

import "./styles.css";
import "quill/dist/quill.snow.css";

const CONFIG = {
  modules: {
    toolbar: "#toolbar",
    keyboard: {
      bindings: {
        transitionToTitleUp: {
          key: 38,
          handler: function(range, _) {
            const [line] = this.quill.getLine(range.index);

            if (range.length === 0 && !line.prev) {
              // focusTitle();
              console.log("FOCUS TITLE");
              return false;
            }

            return true;
          }
        },
        transitionToTitleLeft: {
          key: 37,
          handler: function(range, context) {
            if (
              range.index === 0 &&
              range.length === 0 &&
              context.offset === 0
            ) {
              // focusTitle();
              console.log("FOCUS TITLE");
              return false;
            }
            return true;
          }
        }
      }
    }
  },
  placeholder: "Compose an epic...",
  theme: "snow"
};

const DEFAULT_VALUE =
  'If you put your cursor at the zero-index, and press "Left" or "Up" you will get console logs for "FOCUS TITLE". If you then press "Enter" to create an empty first line, you can go back to the zero-index and "Up" will work, but "Left" will not.';

const App = () => {
  const elementRef = useRef(null);

  // On Mount
  useEffect(() => {
    if (elementRef.current) {
      const editor = new Quill("#editor", CONFIG);

      // Handle paste event to prevent scroll jump
      editor.root.addEventListener("paste", (event) => {
        // Prevent the default paste behavior
        event.preventDefault();

        // Get the pasted text
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData("text/plain");

        // Insert the pasted text at the current cursor position
        editor.clipboard.dangerouslyPasteHTML(editor.getSelection().index, pastedText);
      });

      const contents = editor.clipboard.convert(DEFAULT_VALUE);
      editor.setContents(contents);
    }
  }, []);
  return (
    <div className="App">
      <h1>Quill Issue Example</h1>
      <div id="toolbar">
        <span class="ql-formats">
          <button type="button" class="ql-bold">
            <svg viewBox="0 0 18 18">
              {" "}
              <path
                class="ql-stroke"
                d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
              />{" "}
              <path
                class="ql-stroke"
                d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
              />{" "}
            </svg>
          </button>
          <button type="button" class="ql-italic">
            <svg viewBox="0 0 18 18">
              {" "}
              <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4" />{" "}
              <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14" />{" "}
              <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4" />{" "}
            </svg>
          </button>
          <button type="button" class="ql-underline">
            <svg viewBox="0 0 18 18">
              {" "}
              <path
                class="ql-stroke"
                d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
              />{" "}
              <rect
                class="ql-fill"
                height="1"
                rx="0.5"
                ry="0.5"
                width="12"
                x="3"
                y="15"
              />{" "}
            </svg>
          </button>
        </span>
      </div>
      <div id="editor" ref={elementRef} style={{ height: 375 }} />
    </div>
  );
};

export default App;
