import React from 'react';
import './assets/css/App.css';
import Menu from './components/Menu';
import List from './components/List';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      books:[
        {id:0, rating: 1, title: 'Harry Potter', image: 'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 4, title: 'Codigo Da Vinci', image: 'libro03.jpg'},
        {id:3, rating: 4, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'},
      ],

      copyBooks: []
    };
  } 

  componentDidMount(){
    this.initBooks();
  }

  initBooks = () =>{
    this.setState((state, props) => ({
      copyBooks : [...this.state.books]   
    }));
  }

  onAdd =(item)=>{
    let temp = [...this.state.books];
    const id= temp[temp.length -1].id ++;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onSearch = (query) =>{
    if(query=== ''){
      this.initBooks();
    }
    else {
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]});
    }
  }

  render(){
    return (
      <div className="App">
        <Menu title="Amazon" onadd={this.onAdd} onsearch={this.onSearch}/>
        <List items={this.state.copyBooks}/>
      </div>
    );
  }
}

export default App;
