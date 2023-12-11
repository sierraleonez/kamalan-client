import { STATUS_CODES } from "http";
import { REGISTRY_EVENTS } from "./dummy";

type EVENT_TYPE = 'registry' | 'gift'

export async function getEventHandler(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const eventType = searchParams.get('event_type')
    let response
    if (eventType === 'gift') {
      response = []
    } else if (eventType === 'registry') {
      response = REGISTRY_EVENTS
    }
    return Response.json({
      status: STATUS_CODES[200],
      data: response
    })
  } catch (err) {
    return Response.error()
  }
}