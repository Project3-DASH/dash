// /*
// import React, {Component} from 'react';
// import API from '../../utils/API';
// import ResultItem from '../Results/ResultItem';
// import './Search.css';
//
// class Search extends Component{
//     constructor() {
//         super();
//         // Setting initial state to store the input values
//         this.state = {
//             topic:'',
//             startYear:'',
//             endYear:'',
//             articles:[]
//         }
//         // Binding the event listeners which we will pass as props
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }
//
//     componentWillMount(){
//         // this.loadArticles();
//     }
//
//     loadArticles = (query,startYear,endYear) => {
//         API.getArticles(query,startYear,endYear)
//             .then(res =>
//                 // console.log(res.data.response.docs)
//                 this.setState({
//                     articles: res.data.response.docs
//                 })
//             ).catch(err => console.log(err));
//     }
//
//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]:value
//         });
//     };
//
//     handleFormSubmit = event => {
//         event.preventDefault();
//         // console.log('you clicked me');
//         // window.location.pathname = "/results";
//         this.loadArticles(this.state.topic,this.state.startYear,this.state.endYear);
//
//     }
//
//     render(){
//         return(
//             <div>
//                 <div className="row">
//                     <div className='search'>
//                         <div>
//                              <h2 id="searchTitle">SEARCH</h2>
//                             <form>
//                                 <div>
//                                      <p>Topic</p>
//                                     <input
//                                         value={this.state.topic}
//                                         onChange={this.handleInputChange}
//                                         name="topic"
//                                         type="text"
//                                         placeholder="Topic"
//                                     />
//                                     <button
//                                         onClick = {this.handleFormSubmit}
//                                         className="search_button"
//                                     >SEARCH</button>
//                                 </div>
//                                 <div>
//                                     <p>Start Year</p>
//                                     <input
//                                          value={this.state.startYear}
//                                          onChange={this.handleInputChange}
//                                          name="startYear"
//                                          type="text"
//                                          placeholder="1900"
//                                      />
//                                  </div>
//                                  <div>
//                                      <p>End Year</p>
//                                      <input
//                                          value={this.state.endYear}
//                                          onChange={this.handleInputChange}
//                                          name="endYear"
//                                          type="text"
//                                          placeholder="2017"
//                                      />
//                                  </div>
//
//                             </form>
//                         </div>
//                     </div>
//
//
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <div className='results'>
//                         <div>
//                             <h2 id="resultTitle">RESULTS</h2>
//                             {this.state.articles.map((article) => {
//                                 return(
//                                     <ResultItem
//                                         headline = {article.headline.main}
//                                         url = {article.web_url}/>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// export default Search;
// */
