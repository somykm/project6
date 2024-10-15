const Thing = require('../models/thing');

exports.createSauce = (req, res, next) => {
  const thing = new Thing({
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
  const thing = new Thing({
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
  });

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
      if (!thing) {
        return res.status(404).json({
          error: new Error('No such thing!')
        });
      }
      if (thing.userId !== req.auth.userId) {
        return res.status(400).json({
          error: new Error('Unauthorized request!')
        })
      }
      Thing.deleteOne({ _id: req.parms.id }).then(
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
    }
  )
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