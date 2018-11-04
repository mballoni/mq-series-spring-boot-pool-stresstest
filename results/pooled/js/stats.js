var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "679639",
        "ok": "676105",
        "ko": "3534"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "64775",
        "ok": "6767",
        "ko": "64775"
    },
    "meanResponseTime": {
        "total": "890",
        "ok": "579",
        "ko": "60504"
    },
    "standardDeviation": {
        "total": "4368",
        "ok": "708",
        "ko": "598"
    },
    "percentiles1": {
        "total": "331",
        "ok": "327",
        "ko": "60298"
    },
    "percentiles2": {
        "total": "905",
        "ok": "895",
        "ko": "60701"
    },
    "percentiles3": {
        "total": "2122",
        "ok": "2060",
        "ko": "61746"
    },
    "percentiles4": {
        "total": "3572",
        "ok": "3134",
        "ko": "62701"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 484513,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 86807,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 104785,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 3534,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2059.512",
        "ok": "2048.803",
        "ko": "10.709"
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
        "total": "679639",
        "ok": "676105",
        "ko": "3534"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "64775",
        "ok": "6767",
        "ko": "64775"
    },
    "meanResponseTime": {
        "total": "890",
        "ok": "579",
        "ko": "60504"
    },
    "standardDeviation": {
        "total": "4368",
        "ok": "708",
        "ko": "598"
    },
    "percentiles1": {
        "total": "331",
        "ok": "327",
        "ko": "60298"
    },
    "percentiles2": {
        "total": "905",
        "ok": "895",
        "ko": "60701"
    },
    "percentiles3": {
        "total": "2122",
        "ok": "2060",
        "ko": "61746"
    },
    "percentiles4": {
        "total": "3573",
        "ok": "3134",
        "ko": "62701"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 484513,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 86807,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 104785,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 3534,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2059.512",
        "ok": "2048.803",
        "ko": "10.709"
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
