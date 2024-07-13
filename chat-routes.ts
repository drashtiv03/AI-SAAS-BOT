import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
//Protected API
const chatRoutes = Router();
chatRoutes.post("/new",validate(chatCompletionValidator),verifyToken,generateChatCompletion );


export default chatRoutes;
