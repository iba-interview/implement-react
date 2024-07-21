const bufferClientCode = `
const client = new StringBufferClient();

<Buffer client={client}>
  <Editor />
</Buffer>
`;

const bufferCode = `
export interface BufferClient<T>; {
  maxSize: number;
  buffer: { timestamp: Date, content: T }[];
}

export class StringBufferClient implements BufferClient<string> {
  maxSize = 10;
  buffer: { timestamp: Date; content: string }[] = [];
}
`;

export function Description() {
  return (
    <blockquote className='m-4'>
      <h2>Question Description</h2>
      <h3>Objective</h3>
      <p>Implement a <code>Buffer</code> component that uses a custom hook <code>useNetwork</code> to manage the
        user's network connection status. When the user goes offline, the current state should be recorded into
        the <code>Buffer</code>'s <code>client</code> object, retaining only the most
        recent <code>maxSize</code> records.</p>
      <h3>Requirements</h3>
      <ol>
        <li>
          <p><strong>Implement the <code>useNetwork</code> hook:</strong> This hook should have the following four
            states:</p>
          <ul>
            <li><code>isOnline</code>: Indicates whether the user is online.</li>
            <li><code>isOffline</code>: Indicates whether the user is offline.</li>
            <li><code>offlineAt</code>: Records the time the user went offline.</li>
            <li><code>onlineAt</code>: Records the time the user came online.</li>
          </ul>
        </li>
        <li>
          <p><strong>Implement the <code>Buffer</code> component:</strong></p>
          <p>When <code>isOffline</code> is detected as <code>true</code>, record the state of the components
            under <code>Buffer</code> into the <code>client</code> object.</p>
        </li>
        <li>
          <p><strong>Hints:</strong></p>
          <ul>
            <li>You can use <code>navigator.onLine</code> to get the current network status.</li>
            <li>Feel free to modify the code as needed to meet the requirements.</li>
            <li>You can use the Network Throttling feature in the browser's developer tools (devtools) to simulate
              offline status and test your implementation.
            </li>
            <li>The content stored in <code>Buffer</code> has no limitation. You can store plain text or structured
              objects.
            </li>
            <li>The key point is to update the data in <code>Editor</code> without passing any props.</li>
          </ul>
        </li>
      </ol>

      <h3>Usage Scenario</h3>
      <p>Below is an example of how the <code>Buffer</code> component can be used:</p>
      <pre><code>{bufferClientCode}</code></pre>

      <h3>Interface and Class Description</h3>
      <pre><code>{bufferCode}</code></pre>

      <h3>Functional Requirements</h3>
      <ul>
        <li>When the user goes offline, <code>Buffer</code> should record the current state into
          the <code>client</code> object.
        </li>
        <li>The <code>buffer</code> property of the <code>client</code> object should retain only the most
          recent <code>maxSize</code> records.
        </li>
      </ul>

      <h3>Related File Locations</h3>
      <ul>
        <li><code>src/hooks/useNetwork.ts</code></li>
        <li><code>src/components/buffer/*</code></li>
        <li><code>src/components/editor/*</code></li>
        <li><code>src/view/OnlineEditor/OnlineEditor.tsx</code></li>
      </ul>
    </blockquote>
  );
}