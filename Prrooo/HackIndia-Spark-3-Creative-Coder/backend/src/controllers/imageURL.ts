
import { Request,Response } from "express";
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'

import { S3Client, GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3'
import { parseCommandLine } from "typescript";

const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY ?? "",
    },
    region: "eu-north-1"
})

export const imageURLImport=async (req:Request, res:Response) => {
    // @ts-ignore
    const userId = req.userId;
    console.log("1 request");

    const { url, fields } = await createPresignedPost(s3Client, {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME ?? "",
        Key: `fiver/${userId}/${Math.random()}/image.jpg`,
        Conditions: [
            ['content-length-range', 0, 5 * 1024 * 1024] // 5 MB max
        ],
        Expires: 3600
    })

    res.json({
        preSignedUrl: url,
        fields
    })

}