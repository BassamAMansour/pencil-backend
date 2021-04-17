import Joi from "@hapi/joi";
import {UPLOAD_DIRECTORY} from "../../common/files";

const downloadSchema = Joi.object({id: Joi.string().required()})

export async function download(req, res, next) {
    try {
        await downloadSchema.validateAsync(req.params);

        //TODO: Get the file from file storage service like AWS S3
        res.download(UPLOAD_DIRECTORY + req.params.id)
    } catch (e) {
        next(e)
    }
}
