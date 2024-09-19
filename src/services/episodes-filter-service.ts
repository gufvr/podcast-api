import { repoPodcast } from '../repositories/podcasts-repository';

export const episodesFilterService = async (podcastName: string) => {
  const data = await repoPodcast(podcastName);

  return data;
};
