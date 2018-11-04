var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39592",
        "ok": "39474",
        "ko": "118"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "2830",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "591",
        "ok": "414",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "3264",
        "ok": "316",
        "ko": "2"
    },
    "percentiles1": {
        "total": "337",
        "ok": "336",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "586",
        "ok": "583",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "1032",
        "ok": "1017",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1488",
        "ok": "1410",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34737,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3820,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 917,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 118,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "119.976",
        "ok": "119.618",
        "ko": "0.358"
    }
},
contents: {
"req_create-76ea0": {
        type: "REQUEST",
        name: "create",
path: "create",
pathFormatted: "req_create-76ea0",
stats: {
    "name": "create",
    "numberOfRequests": {
        "total": "39592",
        "ok": "39474",
        "ko": "118"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "2830",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "591",
        "ok": "414",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "3264",
        "ok": "316",
        "ko": "2"
    },
    "percentiles1": {
        "total": "337",
        "ok": "336",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "586",
        "ok": "583",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "1032",
        "ok": "1017",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1488",
        "ok": "1410",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34737,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3820,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 917,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 118,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "119.976",
        "ok": "119.618",
        "ko": "0.358"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
