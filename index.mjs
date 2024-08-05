import express from 'express';
import { APIToolkit } from 'apitoolkit-express';

const app = express();
const port = 3000;
const rootUrl = "http://localhost:8080"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apitoolkitClient = APIToolkit.NewClient({ apiKey: 'l/EeKsQdbiwzntxO0qZsSj4Z9DmeRtqe6O/lh+lfpTFU99iR' ,rootUrl});
app.use(apitoolkitClient.expressMiddleware);

app.get('/', (req, res) => {
  res.json({message:'Hello World!'})
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
