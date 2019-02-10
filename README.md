# project-1

This project allows a user to search by product UPC to find pricing across various online marketplaces. The app primarily uses a barcode scanner (and eventually the phone camera) to input UPC numbers. The API from UPCitemdb.com gives the item and marketplace data. Google maps api is also used to determine present location, which will give the user a location data point for each UPC scan. This feature will be handy in automatically recording where a specific item was scanned in store.

The project originally was to be based around retailer APIs, target, walmart, amazon. Thoses specific APIs were not accessible for this student project, so scraping those sites was looked into. The non-object formatted data was not useful so I am using an API for a UPC barcode database. The app functions as more of a consumer price checker, than a resellers tool, in this 1st iteration.


Credits The game project student developer is Mike Taniguchi.

License The MIT License (MIT)

Copyright (c) 2019 Mike Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
