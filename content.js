function scrapeTableAndDownload() {
  const tables = document.querySelectorAll("table");

  // Check if tables exist and contain visible rows
  const visibleTables = Array.from(tables).filter(
    (table) => table.rows.length > 0 && isVisible(table)
  );

  // If no tables or no visible rows are found, show an alert
  if (visibleTables.length === 0) {
    alert("No tables on this webpage!");
    return;
  }

  let csvData = "data:text/csv;charset=utf-8,";

  visibleTables.forEach((table, index) => {
    csvData += `Table ${index + 1}\n`;
    Array.from(table.rows).forEach((row) => {
      const rowData = Array.from(row.cells)
        .map((cell) => formatCellData(cell))
        .join(",");
      csvData += rowData + "\n";
    });
    csvData += "\n";
  });

  // Create a downloadable CSV file
  const encodedUri = encodeURI(csvData);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "table_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Format the table cell data (handling special cases)
function formatCellData(cell) {
  const cellText = cell.innerText.trim();

  // Date regex patterns
  const dateRegex = [
    /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
    /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY
    /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
  ];

  // Check for date formats
  if (dateRegex.some((regex) => regex.test(cellText))) {
    return `'${cellText}`;
  }

  // Phone number regex
  const phoneRegex = /^(?:\+?\d{1,3}[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
  if (phoneRegex.test(cellText)) {
    return `"${cellText}"`;
  }

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(cellText)) {
    return `"${cellText}"`;
  }

  // Handle commas in the cell text
  if (cellText.includes(",")) {
    return `"${cellText}"`;
  }

  // Handle empty cells or non-string content
  if (!cellText || cellText.length === 0) {
    return `""`; // Handle empty cells
  }

  return cellText;
}

// Check if the table is visible on the page (considering CSS styles)
function isVisible(element) {
  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  );
}

// Handle merged cells (colspan, rowspan)
function handleMergedCells(table) {
  const rowSpanMap = {};
  Array.from(table.rows).forEach((row, rowIndex) => {
    Array.from(row.cells).forEach((cell, colIndex) => {
      // Check for rowspan
      if (cell.rowSpan > 1) {
        for (let i = 1; i < cell.rowSpan; i++) {
          rowSpanMap[`${rowIndex + i}-${colIndex}`] = cell.innerText.trim();
        }
      }

      // Check for colspan
      if (cell.colSpan > 1) {
        // Repeat the content for each spanned column
        for (let i = 1; i < cell.colSpan; i++) {
          row.insertCell(colIndex + i).innerText = cell.innerText.trim();
        }
      }
    });
  });

  // After handling row spans, update the table rows with the mapped content
  Object.keys(rowSpanMap).forEach((key) => {
    const [rowIndex, colIndex] = key.split("-");
    const row = table.rows[rowIndex];
    if (row && row.cells[colIndex]) {
      row.cells[colIndex].innerText = rowSpanMap[key];
    }
  });
}

// Execute the function when the script loads
scrapeTableAndDownload();
