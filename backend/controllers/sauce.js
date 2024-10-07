const Sauce =require ('../moduls/sauce');

exports.createSauce = (req, res, next) => {
  const sause = new Sauce({
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
  sauce.save().then(() => {
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
  Sauce.findOne({
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

exports.modyfySauce = (req, res, next) => {
  const sause = new Sauce({
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

  Sauce.updateOne({ _id: req.params.id }, sauce).then(() => {
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

exports.deleteSauce = (req.res, next) => {
  Sauce.deleteOne({ _id: req.parms.id }).then(
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
};

exports.getAllSauces = (req, res, next) => {
  Sauce.find().then(
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