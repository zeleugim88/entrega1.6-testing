//Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
//Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

//MANUAL MOCKS
const asyncAwait = require('../app/2-3_async_await')
const dataObjects = require('../app/8_json')

  describe('TEST funciones Async / Await', () => {

    test('TEST Async / Await Nivell 1 - Exercici 1 - getEmployee()', async () => {
        expect.assertions(1); 
        const data = await asyncAwait.getEmployee(1);
        expect(data).toEqual({ "id": 1, "name": "Linux Torvalds" })
    })
    
    test('TEST Async / Await Nivell 1 - Exercici 1 - getSalary()', async () => {
        expect.assertions(1); 
        const data = await asyncAwait.getSalary({ "id": 1, "name": "Linux Torvalds" });
        expect(data).toEqual(4000);
            });
        })

//TEST JSON
/*         const path = require('path');
        const fs = jest.createMockFromModule('fs'); */
        jest.mock('fs');
        describe('TEST del JSON', () => {
          const MOCK_FILE_INFO = {
            '../app/asyncAwaitJson.json': 'Fake info',
          };
        
        /*   beforeEach(() => {
            // Set up some mocked out file info before each test
            require('fs').(__setMockFiles(MOCK_FILE_INFO);
          }); */
        
          test('TEST del JSON', () => {
            const employees = JSON.parse(rawdata).employees;
            const salaries = JSON.parse(rawdata).salaries;
              FileSummarizer.summarizeFilesInDirectorySync('/path/to');
        
            expect(fileSummary.length).toBe(2);
          });
        });

        