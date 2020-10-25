const wasmPromise = require("../index")();

test("add", async () => {
    let module = await wasmPromise;
    let result = module.add(1, 2);
    console.log("Result:" + result)
    expect(result).toBe(3)
});

test("welcome", async () => {
    let module = await wasmPromise;
    let result = module.welcome("Jackie");
    console.log(result)
    expect(result).toBe("Hello Jackie")
});
