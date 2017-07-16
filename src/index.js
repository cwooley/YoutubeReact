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

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      //equivelent to this.setState({videos: videos})
    });
  }

  render() {  return (
               <div>
                  <SearchBar />
                  <VideoDetail video={this.state.videos[0]} />
                  <VideoList videos={this.state.videos} />
               </div>
    );
  }
}

// Put that componant on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
