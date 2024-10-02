# Chrome Table Scraper Extension

A Chrome extension for scraping HTML table data from any webpage and converting it into CSV format.

## 🛠️ Features

- Extracts table data from HTML pages.

- Converts extracted data into CSV format.

- Handles complex table structures like merged cells (colspan/rowspan).

- Lightweight and efficient.

## 📦 Installation

1. **Clone the repository**:

   - git clone https://github.com/your-username/chrome-table-scraper.git

2. **Load the extension in Chrome**:

   - Go to `chrome://extensions/` in your browser.

   - Enable **Developer Mode** (toggle in the top right).

   - Click on **Load unpacked**.

   - Select the project folder where the `manifest.json` is located.

3. **Activate the Extension**:

   - After loading the extension, click on the extension icon in the toolbar.

   - Visit any webpage containing a table and start scraping!

## 🧑‍💻 Usage

1.  Navigate to a webpage containing an HTML table.

2.  Click on the Chrome extension icon in the toolbar.

3.  The extension will scrape the table data and prompt you to download it as a CSV file.

## 🧠 Research

- **HTML Table Structures**: Understanding the complexity of `<table>`, `<thead>`, `<tbody>`, `<tr>`, and `<td>` elements was essential for accurately scraping data. I referred to resources like [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) for a comprehensive overview.

- **Parsing HTML and Extracting Data**: Explored JavaScript's `document.querySelectorAll()` and how to use it to target specific table elements. I also looked into libraries like Cheerio and Puppeteer for server-side scraping but opted for native DOM manipulation for simplicity.

- **Competitor Analysis**: Investigated similar tools like [Instant Data Scraper](https://github.com/ohsusannamarie/Instant-Data-Scraper-Chrome-Extension-v0.1.7) to understand code organization and improve my extension’s performance.

## 🔍 Approach

1.  **Project Planning**: Started by organizing the extension structure with `manifest.json`, `content.js`, and `background.js`. Planned to support various table structures and handle different data types, such as dates.

2.  **Problem-Solving**: Faced challenges with date formats and tables with merged cells (colspan/rowspan). Solved these issues by creating reusable functions like `formatDate()` for consistent date handling.

3.  **Testing Strategy**: Tested the extension on multiple websites with diverse table structures to ensure it handles different formats and accurately exports data to CSV.

## 📁 Code Organization

- **File Structure**:

  - `manifest.json`: Chrome extension metadata and configuration.

  - `content.js`: Script that handles scraping and table data extraction.

  - `background.js`: Manages background tasks like event listening.

  - `assets/`: Contains icons and other assets.

- **Modularity**:

  - Functions are organized to encapsulate specific tasks (e.g `extractTableData()` for scraping, `formatDate()` for date handling).

- **Documentation**:

  - Commented code and a clear README for easy understanding and future contributions.

## ✨ How It Works

1.  The content script (`content.js`) scrapes HTML table data using DOM manipulation.

2.  Extracted data is processed and converted into a CSV format using JavaScript’s array manipulation functions.

3.  A CSV file is generated and automatically downloaded for the user.

## 🤝 Contributing

Feel free to fork the repository, make your changes, and submit a pull request. All contributions are welcome!
