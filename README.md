# project-1
This project allows a user to search by product UPC to find pricing across various online marketplaces. The app can use usb a barcode scanner, keyboard input or the phone camera to input UPC numbers. The API from UPCitemdb.com gives access to the item and marketplace data. Google maps API is also used to determine present location. This feature will be handy in automatically recording where a specific item was scanned in store, when monitoring price drops and availability. A user validation function checks for correct UPC formatted numbers. Moment js is incorported to note present time. Firebase is used to store scan instances with date, location, and complete search result object. It functions as a "history" of scans.

Known issues: 
Camera will not restart once its been initiated and window closed. Web page will need to be restarted to use the camera function.

The app initiates system file:/// alerts for googlemaps geolocation and use of the device's camera to scan barcodes. I know alerts are not allowed in this project, but these alerts are system security prompts, not coded and implemented by me.

The project originally was to be based around retailer APIs from large retailers: target, walmart, and amazon, functioning as a seller tool. Thoses specific APIs were not accessible for this student project, so I looked into scraping those sites for data. The non-object formatted data was very tedious to parse so I am using an API for a UPC barcode database. The app functions as more of a consumer price checker, than a resellers tool, in this 1st iteration.


Credits: The game project student developer is Mike Taniguchi.

License The MIT License (MIT)

Copyright (c) 2019 Mike Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
