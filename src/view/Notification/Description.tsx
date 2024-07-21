const modelCode = `
export class Notification {
    constructor(
        public id: string,
        public message: string,
        public date: Date,
        public status: 'processing' | 'done' | 'failed' = 'processing',
    ) {
    }
}
`;

export function Description() {
  return <blockquote className='m-4'>
    <h2>Question Description</h2>
    <h3>Objective</h3>
    <p>In this task, you will implement a notification menu. The menu should display a list of notifications, each
      identified by a unique UUID. The notifications should be sorted by time, with the most recent notifications
      appearing at the top.
    </p>
    <h3>Requirements:</h3>
    <ul>
      <li><strong>Notification Menu</strong>: Implement a menu to display notifications.</li>
      <li><strong>UUID Identification</strong>: Each task/notification should be uniquely identified by a UUID.</li>
      <li><strong>Time-based Sorting</strong>: Notifications should be sorted from the most recent to the oldest.</li>
      <li><strong>Handling Network Instability</strong>: The SSE API simulates an unstable network environment. The
        connection will drop and reconnect every 5 to 10 seconds, and some notifications will be missed during these
        disconnections.
      </li>
      <li><strong>Consistency Maintenance</strong>: Ensure the UI remains consistent and accurately reflects the
        notification statuses despite the network instability.
      </li>
      <li><strong>API Endpoint</strong>: Use the <code>/api/v1/notification</code> endpoint to retrieve the latest
        notification list. This endpoint will provide data showing events at different times. You must aggregate these
        events based on their UUIDs and display the current status for each task.
      </li>
      <li><strong>Stop Sending Events</strong>: Once all tasks have reached
        a <code>done</code> or <code>failed</code> status, no new events will be sent.
      </li>
    </ul>

    <h3>Notification Model:</h3>
    <pre><code>{modelCode}</code></pre>

    <h3>Details:</h3>
    <ul>
      <li><strong>User Interface</strong>:
        <ul>
          <li>Display each notification with its UUID, message, date, and current status.</li>
          <li>Ensure the list is always sorted by time, with the latest notifications on top.</li>
        </ul>
      </li>
      <li><strong>Error Handling</strong>:
        <ul>
          <li>Implement logic to handle missed notifications due to disconnections.</li>
          <li>Ensure the UI does not display incorrect or outdated information.</li>
        </ul>
      </li>
      <li><strong>API Aggregation</strong>:
        <ul>
          <li>Use the <code>/api/v1/notification</code> endpoint to fetch notifications.</li>
          <li>Aggregate notifications with the same UUID and display the most recent status.</li>
        </ul>
      </li>
    </ul>

    <h3>Considerations:</h3>
    <ul>
      <li>Use appropriate data structures to manage and update the notifications efficiently.</li>
      <li>Consider using a retry mechanism or a buffer to handle missed notifications and maintain consistency.</li>
      <li>Pay attention to the user experience, ensuring the notification menu updates smoothly and accurately despite
        network interruptions.
      </li>
      <li>Ensure data integrity by correctly managing the <code>localStorage</code> to reflect the real-time updates
        from the SSE API.
      </li>
      <li>You are free to modify any part of the implementation to best suit your approach to solving this task.</li>
    </ul>

    <h3>Related File Locations</h3>
    <ul>
      <li><code>src/mock/notification.ts</code></li>
      <li><code>src/view/Notification/*</code></li>
    </ul>
  </blockquote>;
}
