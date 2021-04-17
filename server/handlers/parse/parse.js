import Joi from "@hapi/joi";

import {getRenderedUnfurledLink} from "../../model/parse/parse";

const parseSchema = Joi.object({url: Joi.string().required()});

export async function parse(req, res, next) {
    try {
        await parseSchema.validateAsync(req.params);

        res.json(await getRenderedUnfurledLink(req.params.url));
    } catch (e) {
        next(e);
    }
}
