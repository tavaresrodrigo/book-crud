module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        author: String,
        release_year: Number, 
        genre:String,
        pages:Number,
        image: String,
        //image:String,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    }); //check
  
    const Book = mongoose.model("book", schema);
    return Book;
  };