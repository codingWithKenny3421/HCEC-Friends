
import './App.css';
import data from './data';
import FriendsCard from './FriendsCard';
import Header from './Header';

function App() {
  

  console.log(data)

  const cards = data.map( item => {
    return(
      <FriendsCard
      name = {item.name}
      age = {item.age}
      gender = {item.gender}
      path = {item.path}
      grade = {item.grade}
      key = {item.name}
      />
    )
  })
  return (
    <div className="container">
  
       {cards}
       {/* <FriendsCard
      name = {data[1].name}
      age = {data[1].age}
      gender = {data[1].gender}
      path = {data[1].path}
      grade = {data[1].grade}
      key = {data[1].name}
      /> */}
      <Header/>
     
       
    </div>
  );
}

export default App;
