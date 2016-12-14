// tricking react into importing the whole react library so that Babel can still compile into javascript but also the component from the react library so we can extend it instead of only using fat arrow functional components
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    //1.initialize the state of the albumlist component when it's first rendered. the word state is associated with the Component built in react class, available to class based components ONLY. we can then use methods like setState on it.
    state = { albums: [] };
    //componentWillMount is called a lifecycle method that will run immediately on page load. uses axios to make http requests.
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
            //2. update the initial state of the component with the results from http request. always use this built in method, and never do "this.state"
             this.setState({ albums: response.data }));
    }

    render() {
        // console.log(this.state);  this log renders twice, first an empty array, then an array with the data from http request
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
