const Thing = require('../models/thing');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  req.body.thing = JSON.parse(req.body.thing);
  const thing = new Thing({
    name: req.body.thing.name,
    manufacturer: req.body.thing.manufacturer,
    description: req.body.thing.description,
    heat: req.body.thing.heat,
    likes: req.body.thing.likes,
    dislikes: req.body.thing.dislikes,
    imageUrl: url + '/images/' + req.file.filename,
    mainPepper: req.body.thing.mainPepper,
    usersLiked: req.body.thing.usersLiked,
    usersDisliked: req.body.thing.usersDisliked,
    userId: req.body.thing.userId
  });
  thing.save().then(() => {
    res.status(201).json({
      message: "Post saved successfully!"
    })
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
  }
  );
};

exports.getOneSauce = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySauce = (req, res, next) => {
  let thing = new Thing({ _id: req.params._id });
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    req.body.thing = JSON.parse(req.body.thing);
    thing = {
      _id: req.params.id,
      name: req.body.thing.Errorname,
      manufacturer: req.body.thing.manufacturer,
      description: req.body.thing.description,
      heat: req.body.thing.heat,
      likes: req.body.thing.likes,
      dislikes: req.body.thing.dislikes,
      imageUrl: url + '/images/' + req.file.filename,
      mainPepper: req.body.thing.mainPepper,
      usersLiked: req.body.thing.usersLiked,
      usersDislikes: req.body.thing.usersDisliked,
      userId: req.body.thing.userId
    };
  } else {
    thing = {
      _id: req.params.id,
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      heat: req.body.heat,
      likes: req.body.likes,
      dislikes: req.body.dislikes,
      imageUrl: req.body.imageUrl,
      mainPepper: req.body.mainPepper,
      usersLiked: req.body.usersLiked,
      usersDislikes: req.body.usersDisliked,
      userId: req.body.userId
    };
  }

  Thing.updateOne({ _id: req.params.id }, thing).then(() => {
    res.status(201).json({
      message: 'Sauce updated successfully!'
    });
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
  }
  );
};

exports.deleteSauce = (req, res, next) => {
  Thing.findOne({ _id: req.params.id }).then(
    (thing) => {
      const filename = thing.imageUrl.split('/images/')[1];
      fs.unlink('/images/' + filename, () => {
        Thing.deleteOne({ _id: req.params.id }).then(
          () => {
            res.status(200).json({
              message: 'Chocen sauce deleted!'
            });
          }
        ).catch((error) => {
          res.status(400).json({
            error: error
          });
        }
        );
      });
    }
  );
};


exports.getAllSauces = (req, res, next) => {
  Thing.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};