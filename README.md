# Instructions for Completing the Test

1. **Fork this Repository:** Please fork this repo to your own GitHub account.
2. **Choose Tasks Wisely:** Due to time constraints, you do not need to complete every question. Choose the question you feel most confident about first.
3. **Mock Functions:** For complex implementations that might require significant time and are not necessary for the requirement, dummy or mock functions are allowed.
4. **Proficiency in Git:** Your proficiency and workflow on Git are important. Commit message timestamps will be used to ensure submissions are made within the time limit.
5. **Setup:** Execute `npm install` and `npm start` to start the dev server.
6. **Submission:** After completing the test, please reply with the repo link via email.

# Tasks

## Q1. Online Editor

### Objective

Implement a Buffer component that uses a custom hook useNetwork to manage the user's network connection status. When the user goes offline, the current state should be recorded into the Buffer's client object, retaining only the most recent maxSize records.

### Requirements
1. Implement the useNetwork hook: This hook should have the following four states:
   - isOnline: Indicates whether the user is online.
   - isOffline: Indicates whether the user is offline.
   - offlineAt: Records the time the user went offline.
   - onlineAt: Records the time the user came online.
2. Implement the Buffer component:
   - When isOffline is detected as true, record the state of the components under Buffer into the client object.
3. Hints:
   - You can use navigator.onLine to get the current network status.
   - Feel free to modify the code as needed to meet the requirements.
   - You can use the Network Throttling feature in the browser's developer tools (devtools) to simulate offline status and test your implementation.
   - The content stored in Buffer has no limitation. You can store plain text or structured objects.
   - The key point is to update the data in Editor without passing any props.

### Usage Scenario

Below is an example of how the Buffer component can be used:

```jsx
const client = new StringBufferClient();

<Buffer client={client}>
  <Editor />
</Buffer>
```
### Interface and Class Description
```typescript jsx
export interface BufferClient<T> {
    maxSize: number;
    buffer: { timestamp: Date, content: T }[];
}

export class StringBufferClient implements BufferClient<string> {
    maxSize = 10;
    buffer: { timestamp: Date; content: string }[] = [];
}
```
### Functional Requirements
- When the user goes offline, Buffer should record the current state into the client object.
- The buffer property of the client object should retain only the most recent maxSize records.

### Related File Locations
- src/hooks/useNetwork.ts
- src/components/buffer/*
- src/components/editor/*
- src/view/OnlineEditor/OnlineEditor.tsx

## Q2. Notification Menu

### Objective

In this task, you will implement a notification menu. The menu should display a list of notifications, each identified by a unique UUID. The notifications should be sorted by time, with the most recent notifications appearing at the top.

### Requirements:
- **Notification Menu**: Implement a menu to display notifications.
- **UUID Identification**: Each task/notification should be uniquely identified by a UUID.
- **Time-based Sorting**: Notifications should be sorted from the most recent to the oldest.
- **Handling Network Instability**: The SSE API simulates an unstable network environment. The connection will drop and reconnect every 5 to 10 seconds, and some notifications will be missed during these disconnections.
- **Consistency Maintenance**: Ensure the UI remains consistent and accurately reflects the notification statuses despite the network instability.
- **API Endpoint**: Use the /api/v1/notification endpoint to retrieve the latest notification list. This endpoint will provide data showing events at different times. You must aggregate these events based on their UUIDs and display the current status for each task.
- **Stop Sending Events**: Once all tasks have reached a done or failed status, no new events will be sent. 

### Notification Model:
```typescript jsx
export class Notification {
   constructor(
      public id: string,
      public message: string,
      public date: Date,
      public status: 'processing' | 'done' | 'failed' = 'processing',
   ) {
   }
}
```

### Details:
- **User Interface**:
  - Display each notification with its UUID, message, date, and current status.
  - Ensure the list is always sorted by time, with the latest notifications on top.
- **Error Handling**:
  - Implement logic to handle missed notifications due to disconnections.
  - Ensure the UI does not display incorrect or outdated information.
- **API Aggregation**:
  - Use the /api/v1/notification endpoint to fetch notifications.
  - Aggregate notifications with the same UUID and display the most recent status.

### Considerations:
- Use appropriate data structures to manage and update the notifications efficiently.
- Consider using a retry mechanism or a buffer to handle missed notifications and maintain consistency.
- Pay attention to the user experience, ensuring the notification menu updates smoothly and accurately despite network interruptions.
- Ensure data integrity by correctly managing the localStorage to reflect the real-time updates from the SSE API.
- You are free to modify any part of the implementation to best suit your approach to solving this task.

### Related File Locations
- src/mock/notification.ts
- src/view/Notification/*


## Q3. Dynamic Table

### Objective

In this task, you will implement a dynamic table that can display data from different data sources. The implementation should focus on paginator, sorting, and filter lazy loading. You will also need to reflect different conditions in API parameters and allow users to customize column display. If time permits, synchronize the search query in the URL with the table state. Note that the primary focus is on data handling and component design rather than layout. You may use UI libraries for convenience but avoid directly using their table components.

### APIs:
- /api/v1/customer
- /api/v1/product

Each API will return JSON data containing the table's data and the necessary information for its columns. The column information includes the following properties:

- **name**: The name of the column.
- **sortable**: A boolean indicating whether the column can be sorted.
- **filterable**: A boolean indicating whether the column can be filtered.
- **type**: The data type of the column (e.g., string, number, date).
- **options**: Additional options that might be relevant for certain column types (e.g., list of possible values for dropdowns).

### Requirements:

1. **Fetch and Display Data:**
   - Implement a function to fetch data from the selected API endpoint.
   - Display the fetched data in a table format.
   - Ensure the table dynamically adjusts based on the column information provided by the API.
2. **Sorting:**
   - Implement sorting functionality for columns where sortable is true.
   - Allow users to sort data by clicking on the column headers.
   - Reflect the sorting state in the API parameters.
3. **Filtering:**
   - Implement filtering functionality for columns where filterable is true.
   - Provide appropriate filter inputs based on the column type (e.g., text input for strings, range input for numbers, date picker for dates).
   - Reflect the filter state in the API parameters.
4. **Paginator:**
   - Implement pagination to handle large datasets.
   - Ensure pagination state (current page, page size) is reflected in the API parameters.
   - Lazy load data as users navigate through pages.
5. **Customizable Columns:**
   - Allow users to customize the display of columns (e.g., show/hide columns, reorder columns).
   - Provide an interface for users to manage column visibility and order.
6. **URL Synchronization (Optional):**
   - Synchronize the search query in the URL with the table state (sorting, filtering, pagination).
   - Ensure that the table state is preserved when users navigate using the browser’s back and forward buttons.

### Related File Locations
* src/mock/handlers.ts
* src/domain/*
* src/infrastructure/*
* src/components/table/*
* src/view/DynamicTable/*

**Note**: Due to time constraints, it is understood that you may not complete the entire implementation. Please focus on simulating results as much as possible and demonstrate your component API design effectively.