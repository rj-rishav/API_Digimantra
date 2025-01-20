export const getTestHandler = (req, res) => {
    let responseCode = 200;
    res.header({
        "X-Powered-By": "Rishav",
        "X-Custom-Header": "Something Something",
    })
        .status(responseCode)
        .send({ response_code: responseCode, message: "GET: Test successful!" });
}

export const postTestHandler = (req, res) => {
    let responseCode = 200;
    res.header({
        "X-Powered-By": "Rishav",
        "X-Custom-Header": "Something Something",
    })
        .status(responseCode)
        .send({ response_code: responseCode, message: "POST: Test successful!" });
}
