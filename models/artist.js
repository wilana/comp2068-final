/* The Artist Model: 50 points (with potential to earn 75 points) */
// Step 1 (10 points): Import the required library to create a model
const mongoose = require('mongoose');
// Step 2 (25 points): Correct the following schema:
// firstName and lastName are required.
// All attributes are strings
const ArtistSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    set: value => value.trim().replace(/\s+/g, " ")
  },
  lastName: {
    type: String,
    required: true,
    set: value => value.trim().replace(/\s+/g, " ")
  },
  band: {
    type: String
  }
}, {
  timestamps: true
});

// !!! BONUS (25 points): Add an instance method to retrieve all songs for an artist
// NOTE! Requires the controller part as well to get the marks!
ArtistSchema.methods.getSongs = async function () {
  return await mongoose.model('Song').find({
    artist: this._id
  });
}

// Step 3 (15 points): Export the model
module.exports = mongoose.model('Artist', ArtistSchema);