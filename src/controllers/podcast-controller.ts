import { IncomingMessage, request, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/episodes-list-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(content));
};
