import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//Create a componant (some /HTML)

const API_KEY = 'AIzaSyC3Z3qTpvAacDLYEIxaueKflFJbWvdIHsw';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('jordy smith')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {  return (
               <div>
                  <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                  <VideoDetail video={this.state.selectedVideo} />
                  <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
               </div>
    );
  }
}

// Put that componant on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
