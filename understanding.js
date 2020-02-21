// ASCII character files
// line end denoted by '\n'
// Multiple number in a line separated by a single space

/*-----File Reader expectation-----*/
//1st line contains => No. of different books
//                  => No. of libraries
//                  => No. of days
// const bksLibsDys = [books, libs, days]

//2nd line contains => Score of individual different books
// const bkIds = [bk1, bk2, bk3, bk6,...];

//Other lines rep => library sections
//__________LIBRARY SECTION________//
//Line 1 contain -> books in the lib
//               -> signup process days
//               -> dailyShippingCapacity
// const myLibDefinition = [booksInLib, processingDays, dailyCapacity]

//Line 2 rep IDs of books in the library
// const myBksIds = [bk0, bk2, bk3, bk5,...];


// SHOULD RETURN THIS KIND OF INPUT FOR PROCESSING
const inputTemplate = {
  bksLibsDys: [6, 2, 7],
  bksIds: [1, 2, 3, 6, 5, 4],
  allLibraries: [
    {
      bksDysCapacity: [5, 2, 2],
      myBksIds: [0, 1, 2, 3, 4]
    },
    {
      bksDysCapacity: [4, 3, 1],
      myBksIds: [0, 2, 3, 5]
    }
  ]
};



/*------------File writter expectation------------*/
// SHOULD EXPECT THIS KIND OF RESPONSE AFTER INPUT PROCESSING
const responseTemplate = {
    signedUpLibraries: 2,
    libraries: [
        // 1st item rep the first  signed up library
        {
            myId: 1, // gotten from its position in the allLibraries array
            scannedBooks: [5, 2, 3],
        },
        {
            myId: 0,
            scannedBooks: [0, 1, 2, 3, 4],
        },

    ]
}

//*------------Expected file output---------------*/
// 1st line of the file => No. of signed up libraries

// All other lines will represent the jobs done by the libraries in duo-lines
//------------- line 1 rep => theLibraryID (myId), allScannedBks (scannedBooks.length)
//------------- line 2 rep => array of books scanned (scannedBooks)


