/* The Artists Controller: 285 - 305 points */

// Step 1 (10 points): Require the correct model.
const Artist = require('../models/Artist');
// NOTE: Watch your letter case! The below code makes assumptions.

// Step 2 (40 points total):
exports.index = async (request, response, next) => {
  try {
    // a) (10 points): Correct the following line to fetch all the artists.
    const artists = await Artist.find();
    
    // b) (10 points): Respond with all the artists in JSON format.
    response.status(200)
      .json(artists);
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 3 (50 to 70 points total):
exports.show = async (request, response, next) => {
  try {
    // a) (20 points): Fetch the requested artist.
    // Hint: You need the artist ID...
    const { id } = request.params;
    const artist = await Artist.findById(id);
    

    // !!! BONUS (10 points): Get all the songs for this artist
    // NOTE: Requires the model method to get the marks
    const songs = await artist.getSongs();

    // b) (10 points): Respond with the artist
    // !!! BONUS (10 points): Respond with the artist AND the songs
    // NOTE: Must complete all parts of the BONUS requirements to get these points
    response.status(200)
      .json({...artist._doc, dishes });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 4 (60 points total):
exports.create = async (request, response, next) => {
  try {
    // a) (15 points): Using destructuring, extract the attributes from the request body
    const { 
      firstName,
      lastName,
      band 
    } = request.body;
    // b) (25 points): Create a new artist using the extracted attributes
    const artist = await Artist.create({ 
      firstName,
      lastName,
      band 
     });

    response.status(200)
    .json({
      message: "Artist was created successfully",
      status: "success",
      artist
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 5 (70 points total):
exports.update = async (request, response, next) => {
  try {
    // a) (15 points): Using destructuring, extract the attributes from the request body
    const { 
      id,
      firstName,
      lastName,
      band 
    } = request.body;
    // b) (25 points): Update an existing artist using the extracted attributes
    await Artist.findOneAndUpdate({ _id: id }, {
      firstName,
      lastName,
      band 
    });
    // c) (10 points): Fetch an store the updated artist
    const artist = await Artist.findById(id);

    response.status(200)
    .json({
      message: "Artist was updated successfully",
      status: "success",
      artist
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works

// Step 6 (55 points total):
exports.destroy = async (request, response, next) => {
  try {
    // a) (10 points): Using destructuring, extract the ID from the request body
    const { id } = request.body;
    // b) (25 points): Delete an existing artist using the extracted ID
    await Artist.findOneAndDelete({ _id: id});
    
    response.status(200)
    .json({
      message: "Artist was deleted successfully",
      status: "success"
    });
  } catch (error) {
    next(error);
  }
}; // c) (20 points): Endpoint works