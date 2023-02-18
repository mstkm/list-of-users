import React from 'react'
import users from './assets/users'
import themes from './assets/themes'

const App = () => {
  // Judul dokumen
  React.useEffect(() => {
    document.title = 'List of Users'
  }, [])

  // Data users
  const [dataUsers, setDataUsers] = React.useState(users)

  // Search Email
  // Fungsi search email
  const searchEmail = (text) => {
    const result = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].email.includes(text)) {
        result.push(users[i])
      }
    }
    return result
  }
  
  // Handle search email
  const handleSearchEmail = (e) => {
    setDataUsers(searchEmail(e.target.value))
  }

  // Search Progamming Languages
  // Fungsi search programming language
  const searchProgrammingLanguage = (text) => {
    const result = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].programmingLanguages.join(', ').toLowerCase().includes(String(text).toLocaleLowerCase())) {
        result.push(users[i])
      }
    }
    return result
  }
  
    // Handle search email
    const handleSearchProgrammingLanguage = (e) => {
      setDataUsers(searchProgrammingLanguage(e.target.value))
    }

  // Fungsi Sorting By Id
  const usersId = users.map(user => user.id).sort((a, b) => a - b)
  const sortedById = () => {
    const dataUsersSortedById = []
    for (let i = 0; i < usersId.length; i++) {
      let id = usersId[i]
      for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
          dataUsersSortedById.push(users[i])
        }
      }
    }
    return dataUsersSortedById
  }

  // Fungsi Sorting By Email
  const sortedByEmail = () => {
    const dataUsersSortedEmail = []
    const usersEmail = users.map(user => user.email).sort()
    for (let i = 0; i < usersEmail.length; i++) {
      let email = usersEmail[i]
      for (let j = 0; j < users.length; j++) {
        if (email === users[j].email) {
          dataUsersSortedEmail.push(users[j])
        }
      }
    }
    return dataUsersSortedEmail
  }

  // Handle Sort By
  const handleSortBy = (e) => {
    if (e.target.value === 'id') {
      setDataUsers(sortedById())
    }
    if (e.target.value === 'email') {
      setDataUsers(sortedByEmail())
    }
  }

  // Themes
  // Choose Theme
  const chooseTheme = (text) => {
    let result = {}
    for (let i = 0; i < themes.length; i++) {
      if (text === themes[i].name) {
        result = themes[i]
      }
    }
    return result
  }

  // Handle choose theme
  const [theme, setTheme] = React.useState({})
  const headerColorStyle = `bg-[${theme.headerColor}]`
  const handleChooseTheme = (e) => {
    setTheme(chooseTheme(e.target.value))
  }

  return (
    <>
    <div className='mx-10 my-8'>
      <h1 className='font-bold text-3xl'>List of Users</h1>
      <h1 className={`font-bold text-3xl`}>Warna</h1>
    </div>

    <div className='flex gap-3 items-center mx-10 mb-5'>
      <p className='w-28'>Search</p>
      <input 
        name='email'
        type='text' 
        placeholder='Search email' 
        className='placeholder:text-black border-[1px] border-black rounded pl-1 focus:outline-none'
        onChange={(e) => handleSearchEmail(e)}/>
      <input 
        name='programmingLanguages'
        type='text' 
        placeholder='Search programming languages' 
        className='placeholder:text-black border-[1px] border-black rounded pl-1 w-80 focus:outline-none'
        onChange={(e) => handleSearchProgrammingLanguage(e)}/>
    </div>

    <div className='flex gap-3 items-center mx-10 mb-5'>
      <p className='w-28'>Sort By</p>
      <select
        onChange={(e) => handleSortBy(e)}
        className='w-28 border-[1px] border-black rounded pl-1 focus:outline-none'
      >
        <option hidden>--Sort By--</option>
        <option value='id'>ID</option>
        <option value='email'>Email</option>
      </select>
    </div>

    <div className='flex gap-3 items-center mx-10 mb-5'>
      <p className='w-28'>Themes</p>
      <select
        onChange={(e) => handleChooseTheme(e)}
        className='w-28 border-[1px] border-black rounded pl-1 focus:outline-none'
      >
        <option hidden>--Themes--</option>
        {themes.map((theme, index) => {
          return (
            <option key={String(index)} value={theme.name}>{theme.name}</option>
          )
        })}
      </select>
    </div>

    <div className='mx-10'>
      <table className='w-full'>
        <tbody className='border-[1px]'>
          <tr className={
            theme.name === 'Dark' ? 'darkHeaderColor' :
            theme.name === 'Light' ? 'lightHeaderColor' :
            theme.name === 'Blue' ? 'blueHeaderColor' :
            theme.name === 'Red' ? 'redHeaderColor' : ''}>
            <th className={`border-[1px] border-black text-start pl-2 
            ${theme.name === 'Dark' ? 'darkHeaderTextColor' :
            theme.name === 'Light' ? 'lightHeaderTextColor' :
            theme.name === 'Blue' ? 'blueHeaderTextColor' :
            theme.name === 'Red' ? 'redHeaderTextColor' : ''}`}>ID</th>
            <th className={`border-[1px] border-black text-start pl-2 
            ${theme.name === 'Dark' ? 'darkHeaderTextColor' :
            theme.name === 'Light' ? 'lightHeaderTextColor' :
            theme.name === 'Blue' ? 'blueHeaderTextColor' :
            theme.name === 'Red' ? 'redHeaderTextColor' : ''}`}>Email</th>
            <th className={`border-[1px] border-black text-start pl-2 
            ${theme.name === 'Dark' ? 'darkHeaderTextColor' :
            theme.name === 'Light' ? 'lightHeaderTextColor' :
            theme.name === 'Blue' ? 'blueHeaderTextColor' :
            theme.name === 'Red' ? 'redHeaderTextColor' : ''}`}>Marital Status</th>
            <th className={`border-[1px] border-black text-start pl-2 
            ${theme.name === 'Dark' ? 'darkHeaderTextColor' :
            theme.name === 'Light' ? 'lightHeaderTextColor' :
            theme.name === 'Blue' ? 'blueHeaderTextColor' :
            theme.name === 'Red' ? 'redHeaderTextColor' : ''}`}>Programming Languages</th>
          </tr>
          {dataUsers.map((user, index) => {
              return (
                <tr key={String(index)} className={
                  theme.name === 'Dark' ? 'darkDetailColor' :
                  theme.name === 'Light' ? 'lightDetailColor' :
                  theme.name === 'Blue' ? 'blueDetailColor' :
                  theme.name === 'Red' ? 'redDetailColor' : ''}>
                  <td className={`border-[1px] border-black text-start pl-2 
                  ${theme.name === 'Dark' ? 'darkDetailTextColor' :
                  theme.name === 'Light' ? 'lightDetailTextColor' :
                  theme.name === 'Blue' ? 'blueDetailTextColor' :
                  theme.name === 'Red' ? 'redDetailTextColor' : ''}`}>{user.id}</td>
                  <td className={`border-[1px] border-black text-start pl-2 
                  ${theme.name === 'Dark' ? 'darkDetailTextColor' :
                  theme.name === 'Light' ? 'lightDetailTextColor' :
                  theme.name === 'Blue' ? 'blueDetailTextColor' :
                  theme.name === 'Red' ? 'redDetailTextColor' : ''}`}>{user.email}</td>
                  <td className={`border-[1px] border-black text-start pl-2 
                  ${theme.name === 'Dark' ? 'darkDetailTextColor' :
                  theme.name === 'Light' ? 'lightDetailTextColor' :
                  theme.name === 'Blue' ? 'blueDetailTextColor' :
                  theme.name === 'Red' ? 'redDetailTextColor' : ''}`}>{user.isMarried ? 'Married' : 'Not Married Yet'}</td>
                  <td className={`border-[1px] border-black text-start pl-2 
                  ${theme.name === 'Dark' ? 'darkDetailTextColor' :
                  theme.name === 'Light' ? 'lightDetailTextColor' :
                  theme.name === 'Blue' ? 'blueDetailTextColor' :
                  theme.name === 'Red' ? 'redDetailTextColor' : ''}`}>{user.programmingLanguages.join(', ')}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
