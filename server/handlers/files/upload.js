import Joi from "@hapi/joi";
import {uploadFileToStorage} from "../../model/files/upload";

const uploadSchema = Joi.object({file: Joi.object().required()})

async function uploadFile(user, file) {
    // Using non-unique identifier so that the file gets replaced
    // instead of having lots of duplicates in storage.
    const id = user.username + '-' + file.name;

    await uploadFileToStorage(id, file);

    return id;
}

export async function upload(req, res, next) {
    try {
        await uploadSchema.validateAsync(req.files);

        const id = await uploadFile(req.user, req.files.file)

        res.send({message: 'File uploaded successfully!', id});
    } catch (e) {
        next(e);
    }
}