import { IncomingMessage, request, ServerResponse } from 'http';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(
    JSON.stringify([
      {
        podcastName: 'Balela',
        episodeName: 'POLADO FALANDO BALELA #030',
        videoId: 'jR7PaeuPhic',
        categories: ['humor', 'mentality'],
      },
      {
        podcastName: 'Balela',
        episodeName: 'LUCAS INUTILISMO FALANDO BALELA DE NOVO #94',
        videoId: 'LtNsLQimmZs',
        categories: ['humor', 'music'],
      },
    ])
  );
};
