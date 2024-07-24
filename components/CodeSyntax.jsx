import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock(props){
    const { language, value } = props;
    return (
      <SyntaxHighlighter language={language} >
        {value}
      </SyntaxHighlighter>
    );
}