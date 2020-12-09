module.exports = mongoose => {
  //The User schema for our data that we are pushing to Mongodb
  var schema = mongoose.Schema(
    {
      username: String,
      email: String,
      password: String,
      image: String,
      admin: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); //check

  const User = mongoose.model("user", schema);
  return User;
};