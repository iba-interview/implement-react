export function Description() {
  return (
    <blockquote className='m-4'>
      <h2>Question Description</h2>
      <h3>Objective</h3>
      <p>In this task, you will implement a dynamic table that can display data from different data sources. The
        implementation should focus on paginator, sorting, and filter lazy loading. You will also need to reflect
        different conditions in API parameters and allow users to customize column display. If time permits, synchronize
        the search query in the URL with the table state. Note that the primary focus is on data handling and component
        design rather than layout. You may use UI libraries for convenience but avoid directly using their table
        components.</p>

      <p><strong>APIs:</strong></p>
      <ul>
        <li><code>/api/v1/customer</code></li>
        <li><code>/api/v1/product</code></li>
      </ul>
      <p>Each API will return JSON data containing the table's data and the necessary information for its columns. The
        column information includes the following properties:</p>
      <ul>
        <li><code>name</code>: The name of the column.</li>
        <li><code>sortable</code>: A boolean indicating whether the column can be sorted.</li>
        <li><code>filterable</code>: A boolean indicating whether the column can be filtered.</li>
        <li><code>type</code>: The data type of the column (e.g., string, number, date).</li>
        <li><code>options</code>: Additional options that might be relevant for certain column types (e.g., list of
          possible values for dropdowns).
        </li>
      </ul>

      <p><strong>Requirements:</strong></p>
      <ol>
        <li><strong>Fetch and Display Data:</strong>
          <ul>
            <li>Implement a function to fetch data from the selected API endpoint.</li>
            <li>Display the fetched data in a table format.</li>
            <li>Ensure the table dynamically adjusts based on the column information provided by the API.</li>
          </ul>
        </li>
        <li><strong>Sorting:</strong>
          <ul>
            <li>Implement sorting functionality for columns where <code>sortable</code> is <code>true</code>.</li>
            <li>Allow users to sort data by clicking on the column headers.</li>
            <li>Reflect the sorting state in the API parameters.</li>
          </ul>
        </li>
        <li><strong>Filtering:</strong>
          <ul>
            <li>Implement filtering functionality for columns where <code>filterable</code> is <code>true</code>.</li>
            <li>Provide appropriate filter inputs based on the column <code>type</code> (e.g., text input for strings,
              range input for numbers, date picker for dates).
            </li>
            <li>Reflect the filter state in the API parameters.</li>
          </ul>
        </li>
        <li><strong>Paginator:</strong>
          <ul>
            <li>Implement pagination to handle large datasets.</li>
            <li>Ensure pagination state (current page, page size) is reflected in the API parameters.</li>
            <li>Lazy load data as users navigate through pages.</li>
          </ul>
        </li>
        <li><strong>Customizable Columns:</strong>
          <ul>
            <li>Allow users to customize the display of columns (e.g., show/hide columns, reorder columns).</li>
            <li>Provide an interface for users to manage column visibility and order.</li>
          </ul>
        </li>
        <li><strong>URL Synchronization (Optional):</strong>
          <ul>
            <li>Synchronize the search query in the URL with the table state (sorting, filtering, pagination).</li>
            <li>Ensure that the table state is preserved when users navigate using the browser’s back and forward
              buttons.
            </li>
          </ul>
        </li>
      </ol>
      <h3>Related File Locations</h3>
      <ul>
        <li><code>src/mock/handlers.ts</code></li>
        <li><code>src/domain/*</code></li>
        <li><code>src/infrastructure/*</code></li>
        <li><code>src/components/table/*</code></li>
        <li><code>src/view/DynamicTable/*</code></li>
      </ul>
      <p>
        <strong>Note:</strong> Due to time constraints, it is understood that you may not complete the entire
        implementation. Please focus on simulating results as much as possible and demonstrate your component API design
        effectively.
      </p>
    </blockquote>
  );
}
