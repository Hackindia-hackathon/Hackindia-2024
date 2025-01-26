import { Request, Response } from "express";

async function uploadFileCloudinary(file, folder) {
    const options = { folder, resource_type: "auto" };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

export const imageUpload = async (req:Request, res:Response) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imagefile;
        console.log(file);

        const supporedType = ["jpg", "png", "jpeg"];

        if (!supporedType.includes(file.name.split('.')[1].toLowerCase())) {
            return res.status(400).json({
                success: false,
                message: "image type not supported"
            });
        }

        const options = { folder, resource_type: "auto" };
        const response=await cloudinary.uploader.upload(file.tempFilePath, options);

        res.status(200).json({
            success: true,
            message: 'uploaded sucessfully'
        })

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "error in uploading image",
        })
    }
}