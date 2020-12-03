import React, { Component } from "react";
import BookDataService from "../services/book.service";


export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeRelease_year= this.onChangeRelease_year.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.newBook = this.newBook.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      author: "",
      release_year: 2020, 
      genre:"",
      image: null,
      pages:0,
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangeRelease_year(e) {
    this.setState({
      release_year: e.target.value
    });
  }
  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }

  
  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result
    this.setState({
      image: btoa(binaryString)
    })
  }
onChangeImage = e => {
  console.log("file to upload:", e.target.files[0])
  let file = e.target.files[0]
  if (file) {
    const reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this)

    reader.readAsBinaryString(file)

}
}
  onChangePages(e) {
    this.setState({
      pages: e.target.value
    });
  }

  saveBook() {
    console.log("thanks matt");
    var data = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      release_year:this.state.release_year, 
      genre:this.state.genre,
      pages:this.state.pages,
      image:this.state.image
    };

    BookDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          author: response.data.author,
          release_year: response.data.release_year, 
          genre: response.data.genre,
          pages: response.data.pages,
          image: response.data.image,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newBook() {
    this.setState({
      id: null,
      title: "",
      description: "",
      author: "",
      release_year:2020, 
      genre:"",
      pages:0,
      image: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted the book successfully!</h4>
            <button className="btn btn-success" onClick={this.newBook}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
                <label htmlFor="author">Author *</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  required
                  value={this.state.author}
                  onChange={this.onChangeAuthor}
                  name="author"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="release_year">Release Year *</label>
                <input
                  type="text"
                  className="form-control"
                  id="release_year"
                  required
                  value={this.state.release_year}
                  onChange={this.onChangeRelease_year}
                  name="release_year"
                  maxLength={4}
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre"> Genre  <br></br>    
                  <select value={this.state.genre} onChange={this.onChangeGenre}>
                    <option value="Action/Adventure">Action/Adventure</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Biographies/Autobiographies">Biographies/Autobiographies</option>
                    <option value="Classics">Classics</option>
                    <option value="Other">Other</option>            
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="pages">Number of Pages</label>
                <input
                  type="text"
                  className="form-control"
                  id="pages"
                  value={this.state.pages}
                  onChange={this.onChangePages}
                  name="pages"
                />
              </div>
              
              <div className="form-group">
              <div> 
         
              <label htmlFor="Book Cover">Book Cover</label>
            <div> 
                
                <input type="file" onChange={this.onChangeImage}  name="image" id="file" accept=".jpeg , jpg"/> 
                <button onClick={this.saveBook} className="btn btn-success">
              Submit
            </button> 
            </div> 
        
        </div> 
            </div>
            
          </div>
        )}
      </div>
    );
  }
}