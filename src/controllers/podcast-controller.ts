import { IncomingMessage, request, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/episodes-list-service';
import { episodesFilterService } from '../services/episodes-filter-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split('?p=')[1] || '';

  const content = await episodesFilterService(queryString);

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(content));
};
