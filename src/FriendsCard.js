import React from 'react'

const FriendsCard = ({name, age, grade, path}) => {
    const gradeStyling = {
        background:grade == 'Sophomore' ? 'rgb(228, 68, 0)' : 'rgb(0, 46, 228)'
    }
  return (
    <div className = 'FriendCard'>
        {/* 0 */}


        <img src = {path} className = 'profile-pic' alt = {name}/>
        <h1 className = 'name'>{name}</h1>
        <h3 className = 'age'>{age !== 'N/A' ? `${age} years old` : 'Unknown Age'}</h3>
        <h3 className = 'grade' style = {gradeStyling}>{grade}</h3>
       
    </div>
  )
}

// rgb(228, 68, 0)
export default FriendsCard