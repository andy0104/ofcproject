import server from '../server';

beforeAll(async () => {
  try {
    // Connect to the database before starting the tests    
  } catch (error) {
    throw error;
  }
});

beforeEach(async () => {
  // Do something before each test
});

afterAll(async () => {  
  try {    
    // Close connection to the database
  } catch (error) {
    throw error;
  }
});