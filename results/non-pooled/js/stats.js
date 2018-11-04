var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "38413",
        "ok": "38290",
        "ko": "123"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "2344",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "611",
        "ok": "420",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "3381",
        "ok": "320",
        "ko": "1"
    },
    "percentiles1": {
        "total": "344",
        "ok": "342",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "586",
        "ok": "583",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "1062",
        "ok": "1042",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1572",
        "ok": "1471",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33711,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3523,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1056,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 123,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "116.403",
        "ok": "116.03",
        "ko": "0.373"
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
        "total": "38413",
        "ok": "38290",
        "ko": "123"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "2344",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "611",
        "ok": "420",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "3381",
        "ok": "320",
        "ko": "1"
    },
    "percentiles1": {
        "total": "344",
        "ok": "343",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "586",
        "ok": "583",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "1062",
        "ok": "1043",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1572",
        "ok": "1471",
        "ko": "60003"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33711,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3523,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1056,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 123,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "116.403",
        "ok": "116.03",
        "ko": "0.373"
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
