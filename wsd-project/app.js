import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackService from "./feedbacks.js";
const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  return c.text(`Feedback ${id}: ${feedbackService.getFeedbacks(id)}`);
});

app.post("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  feedbackService.increaseFeedback(id);
});
export default app;
