if(process.env.Node_ENV=='production'){
  module.exports = {mongoURI:"mongodb+srv://jacksonw:jacksonw@cluster0-9a0eq.gcp.mongodb.net/test?retryWrites=true&w=majority"}
    }else{
  module.exports = {mongoURI:'mongodb://localhost/blogapp'}
}
