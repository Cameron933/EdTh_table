# 🚀 School Management App

This application allows school teachers to view and update student details.

## File structure

frontend/
|-- .git/
|-- .vscode/
|-- build/
|-- coverage/
|-- node_modules/
|-- public/
| |-- index.html
|-- src/
| |-- components/
| | |-- formConfig.ts
| | |-- LoadingModal.tsx
| | |-- LoadingTable.tsx
| | |-- StudentDetailsModal.tsx
| | |-- StudentInfoFrom.schema.ts
| | |-- StudentTable.tsx
| | |-- StudentTableRow.tsx
| | | |-- Input/
| | | |-- FormGroupInput.tsx
| |-- interfaces/
| | |-- student.d.ts
| |-- services/
| | |-- useStudentDetailsModal.ts
| | |-- useStudentInfoStore.ts
| |-- utils/
| | |-- axiosErrorHelper.ts
| | |-- dateTimeFomatter.ts
| |-- App.tsx
| |-- index.tsx
| |-- setupTests.ts
|-- .eslintrc.json
|-- .prettierignore
|-- .gitignore
|-- package.json
|-- jest.config.js
|-- db.json
|-- README.md
|-- tsconfig.json

### 🤔 Assumptions

- All users of this system are teachers. Hence, there's no need for authentication and login functionalities.
- No error handling for backend-related authentication errors is necessary.

### 🤓 How to set up this repo?

1. Clone this repository to your local machine.
2. Install all dependencies by running:

```
npm install
```

Then you all set!

### 📦 Packages

- React testing library
- Jest
- Chakra UI
- React-hot-toast
- Typescript
- Zustand

### 🏗️ Building the Project

To build the app, run the following command:

```bash
npm run build
```

### 🧪 Testing

- `test`: just gooo o tests
- `test:coverage`: run test and generates a coverage report for your satisfaction

### 🧑‍💻 Starting the Development Server

```bash
npm run server:start
```

### 🧑‍💻 Starting the App

```bash
npm run start
```

### 📚 Technologies Used

| Category           | Technology                      |
| ------------------ | ------------------------------- |
| Framework          | `react`                         |
| BootStrapper       | `create-react-app`              |
| Scripting Language | `typescript`                    |
| Styling            | `chakra-ui`                     |
| State-Management   | `zustand`                       |
| Testing            | `jest`, `react-testing-library` |
| Localisation       | (TBD)                           |
| Code Control       | `eslint`, `prettier`            |
| CI/CD              | (TBD)                           |

## 📝 Task Requirement

### Context

In a school, often teachers needs view and update student details.

### Requirements

Build a single-page list application in which a user should be able to:

- See a list of students in a table with just their full names and date of birth shown in localized format (ie: DD/MM/YYYY)
- When a student is selected from the table, a view of your choice (ie: a modal) will show the following details of the student
  - the student's profile image
  - First name
  - Last name
  - Date of birth
  - Address
    - Street line 1
    - Street line 2
    - Country
    - Postcode
- Only the first name and last names are editable. Other student details are **read only**.
- A teacher could update the first and last names of a student and **persist** it

You are provided with the following API endpoints:

```
GET http://localhost:5000/students
GET http://localhost:5000/students/:id
PATCH http://localhost:5000/students/:id
    Example: A request body of { date_of_birth: "foobar" } will update a students date of birth only. See db.json.
GET http://localhost:5000/profiles
GET http://localhost:5000/profiles/:id

```

- Occasionally the student and profile API endpoints may take a longer period of time to process a request, a sensible loading view/message should inform the user of this
- Occasionally the student and profiles API endpoints will be unresponsive and a sensible message should warn the user about their unavailability
- **Do not modify** `./server.js`
- You can use external libraries

### Starter app

1. run `npm install`
2. run `npm run server:start` to access the aforementioned student & profile details
3. run `npm run start` to access starter app at localhost:3000

