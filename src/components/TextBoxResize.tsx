import React from 'react';
import { Resizable } from 'react-resizable';


function ResizableTextBox() {
  return (
    <Resizable
      className="resizable-text-box"
      width={200}
      height={100}
      minConstraints={[100, 50]}
      maxConstraints={[500, 300]}
    >
      <textarea value="Resizable Text" style={{ width: '100%', height: '100%' }} />
    </Resizable>
  );
}

export default ResizableTextBox;
