import { IncomingMessage } from 'http';
import { repoPodcast } from '../repositories/podcasts-repository';
import { FilterPodcastModel } from '../models/filter-podcast-model';
import { StatusCode } from '../utils/status-code';

export const episodesFilterService = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = { statusCode: 0, body: [] };

  const queryString = podcastName?.split('?p=')[1] || '';
  const data = await repoPodcast(queryString);

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
