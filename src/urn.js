"use strict";

const URN_REGEX = /\burn:((?!urn:)[a-z0-9][a-z0-9-]{1,31}):((?:[a-z0-9()+,-.:=@;$_!*']|%(?:2[1-9a-f]|[3-6][0-9a-f]|7[0-9a-e]))+)/ig;

function scan(str) {
    return find_matches(str, function(matches) {
        return matches[0];
    });
}

function extract(str) {
    return find_matches(str, function(matches) {
        return normalize(matches[1], matches[2]);
    });
}

function find_matches(str, callback) {
    str = String(str);

    let matches, urns = [];
    while((matches = URN_REGEX.exec(str)) !== null) {
        urns.push(callback(matches));
    }

    return urns;
}

function normalize(nid, nss) {
    nid = nid.toLowerCase();
    nss = nss.replace(/(%[2-9A-F][A-F])/g, function(m) { return m.toLowerCase(); });

    return "urn:" + nid + ":" + nss;
}

module.exports = { extract, scan };
