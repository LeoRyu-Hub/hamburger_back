// GoButton.js
import React from 'react';
import '../css/Button.css'; // 버튼 스타일을 외부 CSS 파일로 분리

function Button({ onClick, text }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
