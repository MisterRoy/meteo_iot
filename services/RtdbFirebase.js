
import { ref, onValue, get, child, getDatabase } from '@firebase/database';


// const _db = getDatabase();
// const myRef = ref(_db, '/');
// onValue(myRef, snapshot =>{
//   console.log('New event !');
//   console.log(snapshot.val());
// });

export function formatDataFromFirebase(data){
  if(!data){
    return {};
  }
  const formattedData = {
    'temperature': [],
    'humidity': [],
    'pressure': []
  };
  for(const field in data)
  {
    // console.log(field);
    formattedData['temperature'].push(data[field]['temperature']);
    formattedData['humidity'].push(data[field]['humidity']);
    formattedData['pressure'].push(data[field]['pressure']);
  }
  // console.log('FORMATED !', formattedData);
  
  return formattedData;
}

export async function getDataFromFirebase(){
  try{
    const db = ref(getDatabase());
    const dbSnapshot = await get(db, '/');
    if(dbSnapshot.exists()){
      console.log(dbSnapshot.val());
      const data = dbSnapshot.val();
      // const formattedData = {
      //   'temperature': [],
      //   'humidity': [],
      //   'pressure': []
      // };
      // data.map(o =>{
      //   formattedData['temperature'].push(o['temperature']);
      //   formattedData['humidity'].push(o['humidity']);
      //   formattedData['pressure'].push(o['pressure']);
      // });
      // console.log(formattedData);
      return formatDataFromFirebase(data);

    }else{
      return {};
    }
  }
  catch(err){
    console.log(err);
    return {};
  }
    
}

export async function onNewDataFromFirebase(){
  console.log('New data !!');
  const db = getDatabase();
  const myRef = ref(db, '/');
  onValue(myRef, snapshot =>{
    console.log(snapshot.val());
  });
}