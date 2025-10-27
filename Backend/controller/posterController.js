import creatorPostModel from "../model/creatorPostModel.js";

// Create a Film Post
export const createPost = async (req, res) => {
  try {
    const newPost = new creatorPostModel({
      title: req.body.title,
      description: req.body.description,
      creator: req.body.creator,
      releaseDate: req.body.releaseDate,
      duration: req.body.duration,
      genre: req.body.genre,
      posterUrl: req.body.posterUrl,
      videoUrl: req.body.videoUrl,
    });

    const savedPost = await newPost.save(newPost);
    res.status(201).json({
      message: "Post created successfully 🎬",
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error 🎬",
      error: error.message,
    });
  }
};

// Retrive All Film Posts
export const getAllPosts = async (req, res) => {
  try {
    const data = await creatorPostModel.find();
    res.status(201).json({
      message: "Success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error",
      error: err.message,
    });
  }
};

// Update Film Post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    const updatedPost = await creatorPostModel.findByIdAndUpdate(id, newData, {
      new: true, //Returns New Object after Update
      runValidators: true, //Run Scehema Validations
    });

    res.status(201).json({
      message: "Success Updated",
      data: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "Not Updated",
      error: err.message,
    });
  }
};

// Delete Film Post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await creatorPostModel.findByIdAndDelete(id);
    res.status(201).json({
      message: "Deleted Successfully",
      data: deletedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete Failed",
      error: err.message,
    });
  }
};
