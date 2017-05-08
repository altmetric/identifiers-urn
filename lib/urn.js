"use strict";

function extract(str) {
    var matches = String(str).match(/\burn:(?!urn:)[a-z0-9][a-z0-9\-]{1,31}:(?:[a-z0-9()+,-.:=@;$_!*\']|%(?:2[1-9a-f]|[3-6][0-9a-f]|7[0-9a-e]))+/ig);
    if (!matches) { return []; }

    return matches;
}

exports.extract = extract;
