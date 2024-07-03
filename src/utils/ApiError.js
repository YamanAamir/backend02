class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = this.statusCode
        this.data = null
        this.message = message
        this.errors = errors
        this.success = success

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }