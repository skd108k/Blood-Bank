 const testController = (req, res) => {
 res.status(200).send({
    message: "Welcome Dear",
    sucess: true,
 })
}

module.exports = { testController };