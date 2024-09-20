import { IncomingMessage } from 'http';
import { repoPodcast } from '../repositories/podcasts-repository';
import { PodcastTransferModel } from '../models/filter-podcast-model';
import { StatusCode } from '../utils/status-code';

export const episodesFilterService = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = { statusCode: 0, body: [] };

  const queryString = podcastName?.split('?p=')[1] || '';
  const data = await repoPodcast(queryString);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
