import express from "express"

const router = express.Router()

router.post("/", (req, res) => {
    const { username, password } = req.body

    res.send({ username, password });
});

export default router