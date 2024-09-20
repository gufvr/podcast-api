import { IncomingMessage, request, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/episodes-list-service';
import { episodesFilterService } from '../services/episodes-filter-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  response.writeHead(content.statusCode, { 'Content-type': ContentType.JSON });
  response.write(JSON.stringify(content.body));

  response.end();
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await episodesFilterService(request.url);

  response.writeHead(content.statusCode, { 'Content-type': ContentType.JSON });
  response.write(JSON.stringify(content.body));
  
  response.end()
};
