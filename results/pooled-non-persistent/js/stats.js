var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "829296",
        "ok": "824246",
        "ko": "5050"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "187"
    },
    "maxResponseTime": {
        "total": "64611",
        "ok": "7236",
        "ko": "64611"
    },
    "meanResponseTime": {
        "total": "960",
        "ok": "643",
        "ko": "52843"
    },
    "standardDeviation": {
        "total": "4398",
        "ok": "711",
        "ko": "19626"
    },
    "percentiles1": {
        "total": "430",
        "ok": "423",
        "ko": "60244"
    },
    "percentiles2": {
        "total": "1025",
        "ok": "1013",
        "ko": "60714"
    },
    "percentiles3": {
        "total": "2055",
        "ok": "1997",
        "ko": "61864"
    },
    "percentiles4": {
        "total": "3333",
        "ok": "2897",
        "ko": "63240"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 550483,
        "percentage": 66
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 118440,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 155323,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 5050,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2513.018",
        "ok": "2497.715",
        "ko": "15.303"
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
        "total": "829296",
        "ok": "824246",
        "ko": "5050"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "187"
    },
    "maxResponseTime": {
        "total": "64611",
        "ok": "7236",
        "ko": "64611"
    },
    "meanResponseTime": {
        "total": "960",
        "ok": "643",
        "ko": "52843"
    },
    "standardDeviation": {
        "total": "4398",
        "ok": "711",
        "ko": "19626"
    },
    "percentiles1": {
        "total": "430",
        "ok": "423",
        "ko": "60244"
    },
    "percentiles2": {
        "total": "1025",
        "ok": "1013",
        "ko": "60714"
    },
    "percentiles3": {
        "total": "2054",
        "ok": "1997",
        "ko": "61864"
    },
    "percentiles4": {
        "total": "3333",
        "ok": "2897",
        "ko": "63240"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 550483,
        "percentage": 66
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 118440,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 155323,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 5050,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2513.018",
        "ok": "2497.715",
        "ko": "15.303"
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
