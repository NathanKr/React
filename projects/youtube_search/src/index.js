import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash'; // strange but thats it

const API_KEY = 'AIzaSyBC8r3r8bEbSexXj8BhZTAjdWQk3aNkoX0';


class App extends Component{
  state = {
    videos : [] , 
    selectedVideo : null
  };

  render(){
    const videoSelectHandler = (selectedVideo) =>{
      this.setState({selectedVideo});
    }

    // --- use debounce 
    const searchTermChangeHandler =
     _.debounce(term => this.videoSearch(term) , 300);
    
    return <div>
    <SearchBar onSearchTermChange = {searchTermChangeHandler}/>
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList  videos={this.state.videos}
                onVideoSelect={videoSelectHandler}/>
  </div>;  
  }

  videoSearch(term){
      // --- term is the subject we are looking for in youtube search
      YTSearch({key:API_KEY , term : term} , videos => {

        this.setState({
          videos , //es6 shorthand for writing videos:videos
          selectedVideo : videos[0]});
        });
  }

  componentDidMount(){
    this.videoSearch('surfboards');
  }
} 

ReactDOM.render(<App/>,document.getElementById('container'));