const {TestHelper} = require("uu_appg01_workspace-test");

beforeEach(async () => {
  // fire up application and database
  await TestHelper.setup();
  // call sys/initAppWorkspace endpoint
  await TestHelper.initAppWorkspace();
});

afterEach(() => {
  // tear down application and database
  TestHelper.teardown();
});

describe("Test the createBook command", () => {

  test("test creating and getting a book", async () => {
    // Login as a predefined test user (see config/test.json)
    await TestHelper.login("myAlpha");

    // create the book
    let dtoIn = {code: "example_1", name: "myBook"};
    let myBook = await TestHelper.executePostCommand("createBook", dtoIn);

    expect(myBook.data.code).toBe("example_1");

    // double check the book is saved in DB
    dtoIn = {id: myBook.data.id};
    let outputBook = await TestHelper.executeGetCommand("getBook", dtoIn);
    expect(outputBook.data.code).toBe("example_1");

  });

  test("creating book - invalid dtoIn", async () => {
    expect.assertions(3);

    await TestHelper.login("myAlpha");

    try {
      let dtoIn = {name: "myBook"};
      await TestHelper.executePostCommand("createBook", dtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-demoapp-main/createBook/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
      expect(e.status).toEqual(400);
    }
  });

});
