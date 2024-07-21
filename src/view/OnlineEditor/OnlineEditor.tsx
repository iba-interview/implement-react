import { Editor } from '../../components/editor/Editor';
import { Buffer } from '../../components/buffer/Buffer';
import { StringBufferClient } from '../../components/buffer/stringBufferClient';
import { Description } from './Description';

const client = new StringBufferClient();

export function OnlineEditor() {
  return (
    <div style={{ paddingLeft: 300 }}>
      <h1>OnlineEditor</h1>
      <Description />
      <Buffer client={client}>
        <Editor />
      </Buffer>
    </div>
  );
}
