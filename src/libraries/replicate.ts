import Replicate from "replicate";

export const FOREVER_MODEL = "ai-forever/kandinsky-2.2:ea1addaab376f4dc227f5368bbd8eff901820fd1cc14ed8cad63b29249e9d463";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY as string,
});

export default replicate;