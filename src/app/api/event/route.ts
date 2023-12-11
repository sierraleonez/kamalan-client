import { getEventHandler } from "./handler";

export async function GET(request: Request) {
  const res = await getEventHandler(request);
  return res;
}
