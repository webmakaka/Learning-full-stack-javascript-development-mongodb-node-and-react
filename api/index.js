import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(
  config.dbUrl,
  (err, client) => {
    assert.equal(null, err);

    mdb = client.db(config.dbName);
  }
);

const router = express.Router();

router.get('/contests', (req, res) => {
  let contests = {};

  mdb
    .collection('contests')
    .find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);

      if (!contest) {
        res.send({ contests });
        return;
      }

      contests[contest.id] = contest;
    });
});

router.get('/names/:nameIds', (req, res) => {
  const namesIds = req.params.nameIds.split(',').map(Number);
  let names = {};

  mdb
    .collection('names')
    .find({ id: { $in: namesIds } })
    .each((err, name) => {
      assert.equal(null, err);

      if (!name) {
        res.send({ names });
        return;
      }

      names[name.id] = name;
    });
});

router.get('/contests/:contestId', (req, res) => {
  mdb
    .collection('contests')
    .findOne({ id: Number(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(console.error);
});

export default router;
