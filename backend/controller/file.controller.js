export const singleFileController = (req, res,next) => {
    try {
        const file= req.file.filename;
        res.status(200).json({
            message: "file uploaded successfully",
            fileDetails: req.file,
            url:`http://localhost:8080/${file}`  // to look image in browser
        })
        next();
    }
    catch (error) {
        res.status(400).json({
            message: "problem in uploading single file",
            error: error.message
        })
    }
}