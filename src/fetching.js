//   async function getRandomUsers() {
//     const data = await fetch('https://randomuser.me/api/?results=3');

//     const users = await data.json();
//     const cleanedUsers = users.results.map((user) => {
//       return {
//         name: user.name,
//         email: user.email,
//         gender: user.gender,
//       };
//     });
//     setUsersList(cleanedUsers);
//     setLoading(false);
//   }
//   getRandomUsers().catch(() => {
//     console.log('fetch fails');
//   });
// }, []);

// return loading ? (
//   <h1>loading...</h1>
//  :

// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [attendance, setAttendance] = useState(false);

// const handleKeyDown = (event) => {
//   if (event.key === 'Enter') {

//   }
