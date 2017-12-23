import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const emails = [
      { id: 11, name: 'test1@test.com', pdfId: 11 },
      { id: 12, name: 'test2@test.com', pdfId: 12 },
      { id: 13, name: 'test3@test.com', pdfId: 13 },
      { id: 14, name: 'test4@test.com', pdfId: 14 },
      { id: 15, name: 'test5@test.com', pdfId: 15 },
      { id: 16, name: 'test6@test.com', pdfId: 16 },
      { id: 17, name: 'test7@test.com', pdfId: 17 },
      { id: 18, name: 'test8@test.com', pdfId: 18 },
      { id: 19, name: 'test9@test.com', pdfId: 19 },
      { id: 20, name: 'test10@test.com', pdfId: 20 }
    ];

    const location = [
        { id: 11, email: 'test1@test.com', phone: 11, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 12, email: 'test2@test.com', phone: 12, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 13, email: 'test3@test.com', phone: 13, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 14, email: 'test4@test.com', phone: 14, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 15, email: 'test5@test.com', phone: 15, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 16, email: 'test6@test.com', phone: 16, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 17, email: 'test7@test.com', phone: 17, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 18, email: 'test8@test.com', phone: 18, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 19, email: 'test9@test.com', phone: 19, name: 'John Doe', case: "123", data: "11-11-2017" },
        { id: 20, email: 'test10@test.com', phone: 20, name: 'John Doe', case: "123", data: "11-11-2017" }
      ];
    return {emails};
  }
}
