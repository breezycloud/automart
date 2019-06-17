import http from 'http';
import app from '../../app';



const port = 5000;

const server = http.createServer(app);
server.listen(process.env.PORT || port, () => {
  app.set('host', `http://localhost:${port}`);

  console.log(`Find me on http://localhost:${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
