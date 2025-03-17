import http from 'http';

const init = async (app) => {
  const httpServer = http.createServer(app);
  const port = process.env.PORT || 3000;

  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.info(`Server ready at http://localhost:${port}`);  
}

export {
  init
}
