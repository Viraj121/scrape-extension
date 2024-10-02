function scrapeTableAndDownload() {
  const tables = document.querySelectorAll("table");

  // Check if tables exist and contain visible rows
  const visibleTables = Array.from(tables).filter(
    (table) => table.rows.length > 0
  );

  // If no tables or no visible rows are found, show an alert
  if (visibleTables.length === 0) {
    alert("No tables found on this page.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";

  visibleTables.forEach((table, index) => {
    csvContent += `Table ${index + 1}\n`;
    Array.from(table.rows).forEach((row) => {
      const rowData = Array.from(row.cells)
        .map((cell) => formatCellData(cell))
        .join(",");
      csvContent += rowData + "\n";
    });
    csvContent += "\n";
  });

  // Create a downloadable CSV file
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "table_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Helper function for formatting table cells
function formatCellData(cell) {
  const cellText = cell.innerText.trim();

  // Date regex patterns
  const dateRegex = [
    /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
    /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY format
    /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY format
  ];

  // Check for date formats
  if (dateRegex.some((regex) => regex.test(cellText))) {
    return `'${cellText}`; // Prefix with a single quote to prevent date issues
  }

  // Phone number regex
  const phoneRegex = /^(?:\+?\d{1,3}[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
  if (phoneRegex.test(cellText)) {
    return `"${cellText}"`; // Wrap phone numbers in quotes
  }

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(cellText)) {
    return `"${cellText}"`; // Wrap emails in quotes
  }

  // Wrap values containing commas in quotes
  if (cellText.includes(",")) {
    return `"${cellText}"`;
  }

  return cellText; // Return plain text if no special formatting is needed
}

// Execute the function when the script loads
scrapeTableAndDownload();
