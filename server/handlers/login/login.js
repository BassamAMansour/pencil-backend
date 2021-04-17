import Joi from "@hapi/joi";
import {getUser} from "../../model/login/login";
import jwt from "jsonwebtoken";
import {ACCESS_TOKEN_SECRET} from "../../common/auth";

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

export async function login(req, res, next) {
    try {
        await loginSchema.validateAsync(req.body);
        const {username, password} = req.body;

        const user = await getUser(username, password);
        if (user) {
            const accessToken = jwt.sign(
                {username: user.username, role: user.role},
                ACCESS_TOKEN_SECRET
            );

            res.json({
                accessToken,
            });
        } else {
            res.send("Incorrect username and/or password.");
        }
    } catch (e) {
        next(e);
    }
}
