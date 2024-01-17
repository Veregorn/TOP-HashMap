const HashMap = require("./hashmap");

describe("HashMap", () => {
    test("should create a hashmap", () => {
        const hashmap = new HashMap();
        expect(hashmap).toBeDefined();
    });
    test("should add a value to the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        expect(hashmap.get("name")).toBe("John Doe");
    });
    test("should return true if the key exists in the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        expect(hashmap.has("name")).toBe(true);
    });
    test("should return false if the key does not exist in the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        expect(hashmap.has("age")).toBe(false);
    });
    test("should remove a value from the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.remove("name");
        expect(hashmap.has("name")).toBe(false);
    });
    test("should return the length of the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        expect(hashmap.length()).toBe(3);
    });
    test("should clear the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        hashmap.clear();
        expect(hashmap.length()).toBe(0);
    });
    test("should return the keys of the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        expect(hashmap.keys()).toEqual(expect.arrayContaining(["name", "age", "address"]));
    });
    test("should return the values of the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        expect(hashmap.values()).toEqual(expect.arrayContaining(["John Doe", 30, "123 Main St."]));
    });
    test("should return the entries of the hashmap", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        expect(hashmap.entries()).toEqual(expect.arrayContaining([
            ["name", "John Doe"],
            ["age", 30],
            ["address", "123 Main St."]
        ]));
    });
    test("the hashmap should duplicate its size when it reaches 75% capacity", () => {
        const hashmap = new HashMap();
        hashmap.set("name", "John Doe");
        hashmap.set("age", 30);
        hashmap.set("address", "123 Main St.");
        hashmap.set("city", "New York");
        hashmap.set("state", "NY");
        hashmap.set("zip", "10001");
        hashmap.set("country", "USA");
        hashmap.set("phone", "555-555-5555");
        hashmap.set("email", "johndoe@johndoe.com");
        hashmap.set("website", "johndoe.com");
        hashmap.set("company", "John Doe Inc.");
        hashmap.set("position", "CEO");
        hashmap.set("salary", 100000);
        hashmap.set("hobby", "Soccer");
        expect(hashmap.totalLength()).toBe(32);
    });
});