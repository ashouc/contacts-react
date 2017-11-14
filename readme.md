# Contact Book with React Application Documentation
This is a single page application that mimics a contact book and list a user's contacts. React.js and JSX are used to build the application UI. Axios is used for the API call to the server. This is a mobile and tablet friendly web application.

The web application is available online [here](http://alexshoucri.com/contacts-react/build).

![](header.png)

## Components
This React application contains a total of 8 components.

1. **App**
&nbsp;```<App />``` is the main component and is used to manage the relationship between all other components listed below. It renders all the other components and manages the state of the data of all contacts received from the API.

2. **Contact**
&nbsp;```<Contact />``` is used to render a single contact with the information received from the server. It also manages the the API calls to edit, delete and view the detailed profile of this contact and renders partial contact information (first name, last name, job title, profile picture).

3. **ContactList**
&nbsp;```<ContactList />``` creates the list of all contacts by converting an array of entries into an array of ```<Contact />```.

3. **AddContact**
&nbsp;```<AddContact />``` allows the user to add a new contact to the list of contacts.

4. **FormContact**
&nbsp;```<FormContact />``` renders the form which is used to create and update contacts.

5. **FormButtons**
&nbsp;```<FormButtons />``` renders the buttons to submit or cancel calls to the API.

6. **Header**
&nbsp;```<Header />``` is a function component which returns the header of the page and the number of contacts on the list.

7. **Search**
&nbsp;```<Search />``` helps the user to quickly find a contact by typing either a contact's first name or last name.

8. **ViewFullProfile**
&nbsp;```<ViewFullProfile />``` allows the user to view the full profile of a contact.  

##Features
Several features are found in this application.


## API Contracts
It is assumed that the contact data is retrieved using the following urls:
**http://dev.alexshoucri.com:8888/contacts/**
- Used to list available contacts and create new contacts
**http://dev.alexshoucri.com:8888/contacts/ + id**
- Where "id" is the number associated to each individual contact. This is used to edit, delete and view full contact profile.

The data type of the response is in JSON format. The following sections present the data structure to each method used.

### VIEW ALL PROFILES (api/contacts)
Purpose: to get limited information for all contacts.

Parameters: none.

Method: GET.

**This is the JSON response data structure from the server:**
```
{
  'contacts' : [{
    'id': '1',
    'name': {
      'first': 'Alex',
      'last': 'Shoucri'
    },
    'jobTitle': 'Junior Dev',
    'email': 'me@example.com',
    'photo': 'http://example.com/profile.png'
  }]
}
```
### VIEW ONE PROFILE (api/contacts/id)
Purpose: to get all the information for one contact.

Parameters: id.

Method: GET.

**This is the JSON response data structure from the server:**
```
{
  'id: '1',
  'name': {
    'first': 'Alex',
    'last': 'Shoucri'
  },
  'jobTitle': 'Junior Dev',
  'address': {
    'address1': 'address1',
    'address2': 'address2',
    'city': 'Montreal',
    'state': 'Quebec',
    'zip': '12345'
  },
  'mobile_phone': '123-456-7890',
  'home_phone': '321-654-0987',
  'work_phone': '890-567-1234',
  'email': 'me@example.com',
  'photo': 'http://example.com/profile.png'
}
```

### CREATE ONE PROFILE (api/contacts/id)
Purpose: to create all the information for one contact. The id is created on the back-end side.

Method: POST.

Response: none.

Parameters: JSON object (see below).
**This is the JSON object sent to the server:**
```
{
  'name': {
    'first': 'Alex',
    'last': 'Shoucri'
  },
  'jobTitle': 'Junior Dev',
  'address': {
    'address1': 'address1',
    'address2': 'address2',
    'city': 'Montreal',
    'state': 'Quebec',
    'zip': '12345'
  },
  'mobile_phone': '123-456-7890',
  'home_phone': '321-654-0987',
  'work_phone': '890-567-1234',
  'email': 'me@example.com',
  'photo': 'http://example.com/profile.png'
}
```

### UPDATE ONE PROFILE (api/contacts/id)
Purpose: to update all the information for one contact.

Parameters: id.

Method: PUT.

Response: none.

**This is the JSON object sent to the server:**
```
{
  'id: '1',
  'name': {
    'first': 'Alex',
    'last': 'Shoucri'
  },
  'jobTitle': 'Junior Dev',
  'address': {
    'address1': 'address1',
    'address2': 'address2',
    'city': 'Montreal',
    'state': 'Quebec',
    'zip': '12345'
  },
  'mobile_phone': '123-456-7890',
  'home_phone': '321-654-0987',
  'work_phone': '890-567-1234',
  'email': 'me@example.com',
  'photo': 'http://example.com/profile.png'
}
```

### DELETE ONE PROFILE (api/contacts/id)
Purpose: to delete one contact and all the information associated to it.

Parameters: id.

Method: DELETE.

Response: none.

**This is the JSON object sent to the server:**
```
{
  'id: '1',
  'name': {
    'first': 'Alex',
    'last': 'Shoucri'
  },
  'jobTitle': 'Junior Dev',
  'address': {
    'address1': 'address1',
    'address2': 'address2',
    'city': 'Montreal',
    'state': 'Quebec',
    'zip': '12345'
  },
  'mobile_phone': '123-456-7890',
  'home_phone': '321-654-0987',
  'work_phone': '890-567-1234',
  'email': 'me@example.com',
  'photo': 'http://example.com/profile.png'
}
```
