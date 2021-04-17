import {UPLOAD_DIRECTORY} from "../../common/files";

//TODO: Upload to a file storage service like AWS S3
export async function uploadFileToStorage(id, file) {
    const uploadPath = UPLOAD_DIRECTORY + id;
    await file.mv(uploadPath);
}