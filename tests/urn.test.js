"use strict";

const urn = require("../lib/urn");

describe("scan", () => {
    test("scans a string for URNs", () => {
        var text = "En un pueblo italiano urn:1234:abc al pie de la montaña URN:foo:bar%23.\\";

        expect(urn.scan(text)).toEqual(["urn:1234:abc", "URN:foo:bar%23."]);
    });

    test("only extracts URNs with word boundaries at the beginning", () => {
        var text = "sideburn:mutton:chops";

        expect(urn.scan(text)).toEqual([]);
    });
});

describe("extract", () => {
    test("scans and normalizes URNs", () => {
        var text = "URN:FOO:BAR urn:foo:%2F1%2F23 urn:foo:%2f1%2f23";

        expect(urn.extract(text)).toEqual([
            "urn:foo:BAR",
            "urn:foo:%2f1%2f23",
            "urn:foo:%2f1%2f23"
        ]);
    });
});
