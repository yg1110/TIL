import React, { Component } from "../node_modules/@types/react";
import WordAdd from "./WordAdd";
import WordDisplay from "./WordDisplay";

import { firestore } from "./firebase";

class App extends Component {
  state = {
    dictionary: [],
    word: ""
  };

  componentDidMount() {
    const dictionary = [...this.state.dictionary];
    firestore
      .collection("wiki")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          dictionary.push({ todo: doc.data().todo, id: doc.id });
        });
        this.setState({ dictionary });
      });
  }

  onClickHandler = e => {
    e.preventDefault();
    firestore
      .collection("wiki")
      .add({ todo: this.state.word })
      .then(r => {
        const dictionary = [
          ...this.state.dictionary,
          { todo: this.state.word, id: r.id }
        ];
        this.setState({ dictionary, word: "" });
      });
  };

  onChangeHandler = e => {
    this.setState({
      word: e.target.value
    });
  };

  deleteHandler = id => {
    firestore
      .collection("wiki")
      .doc(id)
      .delete()
      .then(() => {
        const dictionary = this.state.dictionary.filter(word => word.id !== id);
        this.setState({ dictionary });
      });
  };

  render() {
    return (
      <div className="container">
        <WordAdd
          value={this.state.word}
          ChangeHandler={this.onChangeHandler}
          ClickHandler={this.onClickHandler}
        />
        <div>
          <WordDisplay
            dictionary={this.state.dictionary}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
