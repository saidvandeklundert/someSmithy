// --- model/time.smithy ---
$version: "2"

namespace example.time

service Time {
    version: "0.0.1"
    operations: [GetCurrentTime]
}

/// An operation for getting the current time
@readonly
@http(code: 200, method: "GET", uri: "/time",)
operation GetCurrentTime {
    output := { 
        @required 
        @timestampFormat("date-time") 
        time: Timestamp 
    }
}


enum Scope {
    CHRONUS
    TIMES
}