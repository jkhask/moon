import { AgentRequestEvent } from '../interfaces/AgentRequestEvent'
import { DownstreamResponse } from '../interfaces/DownstreamResponse'

export const buildResponseObject = <T>(
  event: AgentRequestEvent,
  status: number,
  body: T
): DownstreamResponse => ({
  messageVersion: '1.0',
  response: {
    actionGroup: event.actionGroup,
    apiPath: event.apiPath,
    httpMethod: event.httpMethod,
    httpStatusCode: status,
    responseBody: {
      'application/json': {
        body: JSON.stringify(body),
      },
    },
  },
  sessionAttributes: event.sessionAttributes,
  promptSessionAttributes: event.promptSessionAttributes,
})
