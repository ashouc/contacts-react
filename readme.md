# Contact Book with React Application Documentation
This is a single page application that mimics a contact book and list a user's contacts. React.js and JSX are used to build the application UI. Axios is used for the API call to the server. This is a mobile and tablet friendly web application.

The web application is available online [here](http://alexshoucri.com/contacts-react/build).

![](header.png)

## Components
&nbsp;```<App />```

&nbsp;```<Contact />```

&nbsp;```<ContactList />```

&nbsp;```<AddContact />```

&nbsp;```<FormContact />```

&nbsp;```<FormButtons />```

&nbsp;```<Header />```

&nbsp;```<Search />```

&nbsp;```<ViewFullProfile />```

##Features


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
