import { IncomingMessage, request, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/episodes-list-service';
import { episodesFilterService } from '../services/episodes-filter-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(StatusCode.OK, { 'Content-type': ContentType.JSON });
  response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await episodesFilterService(req.url);

  res.writeHead(StatusCode.OK, { 'Content-type': ContentType.JSON });
  res.end(JSON.stringify(content));
};
