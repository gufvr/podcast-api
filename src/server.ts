import * as http from 'http';

import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { httpMethod } from './utils/http-methods';

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];

    if (request.method === httpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
