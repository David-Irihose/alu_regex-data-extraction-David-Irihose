# Regex Data Extractor

A Node.js script that reads text from a `.txt` file and extracts **emails, URLs, phone numbers, credit card numbers, and time values**
using regular expressions. Extracted data is masked (for sensitive info like credit cards) and saved into a JSON file.

## Features

- Extracts:
  - **Emails**  
  - **URLs**  
  - **Phone numbers** (Rwanda format: `+2507XXXXXXXX` or `07XXXXXXXX`)  
  - **Credit card numbers** (masked except for the last 4 digits)  
  - **Time values** (12-hour and 24-hour formats)
- Saves extracted data in `sample_output.json`
- Handles multiple occurrences of each type
- Easy to customize with your own regex patterns

## Prerequisites

- Node.js installed (v14+ recommended)
- Basic knowledge of running Node.js scripts


## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/regex-data-extractor.git
