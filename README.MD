### In this project 

We will use React along with Material UI v5.5.0 to build an image finder application that uses the PixaBay API to fetch images based on a query string. 

We will also implement a Dialog box from Material UI v5.5.0 to view the large image

1. Tree Components:

- State: Step & Fields
- Methods: nextStep(), prevStep() & handleChange()
- Components: 

    - ImageFinderForm
    - Dashboard
    - DebouncedInput
    
### Scaffold React Application

`
    git clone --single-branch -b react-mui-using-pixabayapi https://github.com/WebDevN-F/webdev-with-reactjs.git .
`

### Install dependencies [MUI v5.5.0](https://mui.com/getting-started/installation/)

`
    npm install
`

### SETUP ENV

copy file `.env.local` to `.env.development.local` then update `KEY_PIXABAY_API=<YOUR API key>`

### Migration from V4 to V5

https://mui.com/guides/migration-v4/#migrate-from-jss