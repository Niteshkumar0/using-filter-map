
export default  function UserInformation (){
     let Users= [
      {
          id:1,
          name:"salish",
          profession:'software engineer',
      },
      {
          id:2,
          name:"nitesh",
          profession:"software engineer",
      },
      {
          id:3,
          name:"ajesh",
          profession:"doctor",
      },
      {
        id:4,
        name:"sahil",
        profession:"CA",
     },
     {
        id:5,
        name:"romi",
        profession:"doctor",
    },
    {
        id:6,
        name:"alkaish",
        profession:"bussiness",
    },
    {
        id:7,
        name:"aryan",
        profession:"bussiness",
    },
    {
        id:8,
        name:"sandesh",
        profession:"bussiness",
    }
     ]
    
    let showlUserInformationSoftware = Users.filter(user => user.profession == 'software engineer');
    let showlUserInformationBussiness = Users.filter(user => user.profession == 'bussiness');
    let showlUserInformationDoctor = Users.filter(user => user.profession == 'doctor');
        return (
            <>
            <h2>software engineer</h2>
            <ul>
                {showlUserInformationSoftware.map(user => <li key={user.id}>{user.name}</li>) }
            </ul>
            <hr />
            <h2>Doctor</h2>
            {showlUserInformationDoctor.map(user => <li key={user.id}>{user.name}</li> )}
            <hr />
            <h2>bussiness</h2>
            {showlUserInformationBussiness.map(user => <li key={user.id}>{user.name}</li>)}
            
            </>
        )
            
    
    
 }