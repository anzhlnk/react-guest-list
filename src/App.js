/** @jsxImportSource @emotion/react */
import './App.css';
import { useEffect, useState } from 'react';
import { content, name, sectionParent, table, tableContent } from './css.js';

export default function GuestList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [attendance, setAttendance] = useState(false);

  const baseUrl = 'http://localhost:4000';

  useEffect(() => {
    async function getAllGuests() {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();

      setGuestList(allGuests);
      console.log(allGuests);
    }
    getAllGuests().catch(() => {
      console.log('fetch fails');
    });
  }, []);

  useEffect(() => {
    async function postToTheDataBase() {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
      });
      const createdGuest = await response.json();
    }
    postToTheDataBase().catch(() => {
      console.log('post fails');
    });
  }, [firstName, lastName]);

  // const updatedList = [
  //   ...guestList,
  //   {
  //     name: {
  //       title: 'Mrs',
  //       first: 'Ines',
  //       last: 'Rodriguez',
  //     },
  //     gender: 'female',
  //     email: 'ines.rodriguez@myemail.com',
  //   },
  // ];
  // 3. set new state
  //   setUsersList(updatedUsersList);
  // }}

  return (
    <div css={sectionParent}>
      <div css={content}>
        <h1>GUEST LIST</h1>
        <form>
          <label css={name}>
            First name
            <input
              placeholder="First name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </label>
          <label css={name}>
            Last name
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </label>
        </form>
        {guestList.map((guest) => {
          return (
            <div key={`${guest.firstName}-${guest.lastName}`} css={table}>
              <hr />
              <div css={tableContent}>
                <p>
                  Name: {guest.firstName} {guest.lastName}
                </p>
                <label>
                  <input
                    type="checkbox"
                    checked={attendance}
                    onChange={(event) => {
                      setAttendance(event.currentTarget.checked);
                    }}
                  />
                  {attendance ? 'attending' : 'not attending'}
                </label>
                <button>Remove</button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
