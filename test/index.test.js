const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe( "Processing User Data Functions", () => {
    describe("capitalizeWords(input)", () => {
        test("reformats a string so that the first letter of each word is capitalized", () => {
            expect(capitalizeWords("hello world")).toBe("Hello World")
            expect(capitalizeWords("")).toBe("")
            expect(capitalizeWords("hello-world")).toBe("Hello-World")
            expect(capitalizeWords("hello")).toBe("Hello")
        })
            
    } )
    describe("filterActiveUsers(users)", () => {
        test("correctly filters active users from an array", () => {
        const users = [{name: "Esme", isActive: true}, {name: "Haku", isActive: false}, {name: "Totoro", isActive: true}]
        const emptyArray = []
        const result2 = filterActiveUsers(emptyArray)
        const result = filterActiveUsers(users)
            expect(result.length).toBe(2)
            expect(result).toEqual([{name: "Esme", isActive: true}, {name: "Totoro", isActive: true}])
            expect(result2).toEqual([])
          
        })
        
    })
    describe("logAction(action, username)", () => {
        test("generates the correct log string for valid inputs", () => {
        const result = logAction("login", "Totoro")
        const result2 = logAction("", "")
        const timestamp = new Date().toISOString();
        console.log("test" + timestamp)
            expect(result).toBeDefined()
            expect(result).toContain("login")
            expect(result).toContain("Totoro")
            expect(result2).toEqual("User  performed  at " + timestamp)
            
        })
      
    })
    
} )
