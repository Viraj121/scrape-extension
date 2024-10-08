# Chrome Table Scraper Extension

A Chrome extension for scraping HTML table data from any webpage and converting it into CSV format.

## 🛠️ Features

- Extracts table data from HTML pages.

- Converts extracted data into CSV format.

- Handles complex table structures like merged cells (colspan/rowspan).

- Lightweight and efficient.

## 📦 Installation

1. **Clone the repository**:

   - git clone https://github.com/Viraj121/scrape-extension.git

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

  - **References**:

    - [Using DOM for Scraping Web Pages](https://docs.apify.com/academy/node-js/scraping-shadow-doms) : This tutorial explained how to efficiently use JavaScript's DOM manipulation capabilities to scrape web data. I applied these concepts to target HTML tables for extraction.

    - [Cheerio Documentation](https://cheerio.js.org/docs/intro): While my project used native JavaScript for client-side scraping, I explored Cheerio as an alternative when considering server-side scraping for future enhancements.

- **CSV Conversion**: After scraping the table data, I needed to convert the extracted HTML table into a CSV format. I researched JavaScript methods for handling arrays and strings, such as `Array.prototype.map()` and `Array.prototype.join()`, to dynamically generate CSV rows.

  - **References**:

    - [Convert HTML Table Data to CSV Using JavaScript](https://dev.to/popoolatopzy/how-to-convert-html-table-to-csv-file-14p3) : This thread provided solutions and examples of how to iterate through table rows and cells to construct CSV-formatted strings.

- **Competitor Analysis**: Investigated similar tools like [Instant Data Scraper](https://github.com/ohsusannamarie/Instant-Data-Scraper-Chrome-Extension-v0.1.7) to understand code organization and improve my extension’s performance.

* **Libraries Considered**: I researched libraries like **Cheerio** and **Puppeteer** from Node.js but found that using them in Chrome extension projects can be inefficient due to performance overhead. These libraries may increase the extension's size and slow down load times, complicate dependency management, and make the project harder to maintain. For simple scraping tasks, it's often better to use native browser APIs or lightweight solutions specifically designed for Chrome extensions.

- **Resources Referenced**: I found a Reddit discussion where a user created a Chrome extension that scrapes any website with one click, which provided insights into practical implementation [Reddit link](https://www.reddit.com/r/webdev/comments/1b4jkqo/i_made_a_chrome_extension_that_can_scrape_any/).

  I read a [FreeCodeCamp Article - Building a Chrome Extension](https://www.freecodecamp.org/news/building-chrome-extension/)
  on creating JavaScript extensions, covering what a Chrome extension is, its structure, and the creation of a `manifest.json` file.

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
