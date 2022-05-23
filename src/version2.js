/** @jsxImportSource @emotion/react */
import './App.css';
import { useEffect, useState } from 'react';
import { content, name, sectionParent, table, tableContent } from './css.js';

export default function GuestList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const baseUrl = 'https://react-guest-list-anzh.herokuapp.com/guests';
  const [loading, setLoading] = useState(true);
  const [stateUpdate, setStateUpdate] = useState(true);

  // Get Data
  useEffect(() => {
    async function getAllGuests() {
      const response = await fetch(baseUrl);
      const allGuests = await response.json();
      setLoading(false);
      setGuestList(allGuests);
      console.log(allGuests);
    }
    getAllGuests().catch(() => {
      console.log('fetch fails');
    });
  }, [stateUpdate]);

  // Post new data
  async function postToTheDataBase() {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const newGuest = await response.json();
    guestList.push(newGuest);
    setFirstName('');
    setLastName('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postToTheDataBase().catch(() => {
      console.log('submit fails');
    });
  };

  // Delete data
  async function deleteGuest(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    await response.json();
    setGuestList(guestList.filter((x) => x !== id));
    setStateUpdate(!stateUpdate);
  }

  // Update the attending status

  async function updateAttendance(id, attendance) {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: attendance }),
    });
    await response.json();
    const indexOfTheGuest = guestList.findIndex((x) => x.id === id);
    guestList[indexOfTheGuest].attending = attendance;
    setStateUpdate(!stateUpdate);
  }

  return (
    <div css={sectionParent}>
      <div css={content}>
        <header>
          <h1>GUEST LIST </h1>
          <span>{loading ? 'Loading...' : ''}</span>
        </header>
        <form onSubmit={handleSubmit}>
          <label name="first-name" css={name}>
            First name
            <input
              placeholder="First name"
              disabled={loading ? true : false}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label name="last-name" css={name}>
            Last name
            <input
              placeholder="Last name"
              disabled={loading ? true : false}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  postToTheDataBase().catch(() => {
                    console.log('post fails');
                  });
                }
              }}
            />
          </label>
        </form>
        {guestList.map((guest) => {
          return (
            <div key={guest.id} css={table} data-test-id="guest">
              <hr />
              <div css={tableContent}>
                <p>
                  Name: {guest.firstName} {guest.lastName}
                </p>
                <label>
                  <input
                    aria-label="attending"
                    type="checkbox"
                    checked={guest.attending}
                    onChange={() => {
                      updateAttendance(guest.id, !guest.attending).catch(() => {
                        console.log('update fails');
                      });
                      console.log(guest.attending);
                    }}
                  />
                  {guest.attending ? 'attending' : 'not attending'}
                </label>
                <button
                  aria-label="Remove"
                  onClick={() => {
                    deleteGuest(guest.id).catch(() => {
                      console.log('delete fails');
                    });
                  }}
                >
                  {' '}
                  Remove
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
