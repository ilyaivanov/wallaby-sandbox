describe("when calling add function", function () {
    it("result should return the sum of two input parameters", function () {
        expect(add(2, 3)).toBe(5);
    });

    it("failing test", function () {
        var o = {a: 1, b: 2};
        let {a,b} = o;

        expect(a).toBe(1);

        //this should fail
        expect(b).toBe(1);
    });
});