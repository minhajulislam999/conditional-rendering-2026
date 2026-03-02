import React from 'react'

function ConditionalRendering({isLoggedin}) {
  console.log(isLoggedin);
  // if(isLoggedin == true)
  
  return (
    
    <div>
      {/* conditional rendering: amra prothome if else er kotha bavte pari like: eta ekta conditional rendering colo amra udhahoroner maddhome dekhi */}

       
     {/* <h1>welcome</h1>
      */}

      <div>
        { isLoggedin ? <h1>Welcome Back</h1> : <h1>Please Login</h1>}

        
      </div>
      

{/* <h1>{person.name}</h1> */}


      {/* <h1>{person}</h1> */}
    </div>
  )
}

export default ConditionalRendering
