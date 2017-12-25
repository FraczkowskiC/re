import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const emails = [
      { id: 11, name: 'test1@test.com', date: "2017-01-02 00:00:00.000", pdfId: 11 },
      { id: 12, name: 'test2@test.com', date: "2017-09-03 00:00:00.000", pdfId: 12 },
      { id: 13, name: 'test3@test.com', date: "2017-01-04 00:00:00.000", pdfId: 13 },
      { id: 14, name: 'test4@test.com', date: "2017-01-05 00:00:00.000", pdfId: 14 },
      { id: 15, name: 'test5@test.com', date: "2017-03-06 00:00:00.000", pdfId: 15 },
      { id: 16, name: 'test6@test.com', date: "2017-02-07 00:00:00.000", pdfId: 16 },
      { id: 17, name: 'test7@test.com', date: "2017-01-07 00:00:00.000", pdfId: 17 },
      { id: 18, name: 'test8@test.com', date: "2017-05-08 00:00:00.000", pdfId: 18 },
      { id: 19, name: 'test9@test.com', date: "2017-06-09 00:00:00.000", pdfId: 19 },
      { id: 20, name: 'test10@test.com', date: "2017-08-12 00:00:00.000", pdfId: 20 }
    ];

    const location = [
        { id: 11, email: 'test1@test.com', phone: 113212123, name: 'John Doe', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 12, email: 'test2@test.com', phone: 113212123, name: 'John Does', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 13, email: 'test3@test.com', phone: 113212123, name: 'Fran Doex', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 14, email: 'test4@test.com', phone: 113212123, name: 'Anthony Doec', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 15, email: 'test5@test.com', phone: 113212123, name: 'Test Doev', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 16, email: 'test6@test.com', phone: 113212123, name: 'Andrew Doeb', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 17, email: 'test7@test.com', phone: 113212123, name: 'Mark Doen', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 18, email: 'test8@test.com', phone: 113212123, name: 'John Doem', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 19, email: 'test9@test.com', phone: 113212123, name: 'John Doeo', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" },
        { id: 20, email: 'test10@test.com', phone: 113212123, name: 'John Doep', case: "123123123123123123", date: "11-11-2017", lawyer: "Misty Meanor" }
      ];
    return {emails, location};
  }
}
