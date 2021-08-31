import { authenticateAuthToken } from "../../middlewares/auth"
import { runMiddleware } from "../../middlewares/runMiddleware"
import passport from 'passport'

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'GET':
            await runMiddleware(req, res, authenticateAuthToken)
            res.status(200).send({ userId: req.user._id, role: req.user.role });
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}