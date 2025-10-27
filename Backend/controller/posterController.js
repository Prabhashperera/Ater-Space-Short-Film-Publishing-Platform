import creatorPostModel from "../model/creatorPostModel.js";

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


export const getAllPosts = async (req, res) => {
  try{
    const data = await creatorPostModel.find()
    res.status(201).json({
      message: "Success",
      data: data
    })
  }catch(err) {
        res.status(500).json({
      message: "Error",
      error: err.message
    })
  }
}
