import React from 'react'
import styles from "../../styles/ReUsables/highlightedtext.module.scss";

interface HighlightedTextProps {
  text: string;
  keywords?: string[];
  color: string;
}

const HighlightedText = ({
  text,
  keywords,
  color
}: HighlightedTextProps) => {
  // Split the text into words
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, index) => {
        // Remove punctuation for matching and convert to lowercase.
        const cleanedWord = word.replace(/[.,!?;:()]/g, "");

        if (keywords?.includes(cleanedWord)) {
          return (
            <span key={index}>
              {word}{" "}
            </span>
          );
        } else {
          return (
            <span key={index} style={{color: color}}>
              {word}{" "}
            </span>
          );
        }
      })}
    </p>
  );
};

export default HighlightedText;