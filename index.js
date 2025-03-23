import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "SERver is running!" })
})

app.listen(3000)