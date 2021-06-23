# Sanctions Explorer

[Sanctions Explorer](https://sanctionsexplorer.web.app) is a version of [C4ADS's Sanction Explorer](https://sanctionsexplorer.org) that I built with React, a Google Firestore NoSQL database, and Algolia search.

The search page works similarly to C4ADS's Sanction Explorer, but this version is not fully featured yet and does not yet pull from all of the data sources that C4ADS pulls from. I have not yet implemented the analytics page.

The subset of OFAC active sanctions that is displayed in Sanctions Explorer was pulled from the [OFAC SDN XML file] (https://www.treasury.gov/ofac/downloads/sdn.xml) on June 19th, 2021.

## Installation and Setup Instructions

Installation:

`npm install`

To Run Build:

`npm run build`

To Start Server:

`npm start`
