# starter page setup 

## rails setup (back only )
* creates a new rails project using a postgresql
*
* --api is going to make rails only act as an api (rails to have and view ) rails by default is an mvc, doing --api makes our app an mv framework, eventually we use react as the v (view)

* api makes rails backend only, rails doing nothing with the front end (get http request => respond with json(data))

* to create a new rails project 

```
$ rails new <project-name> -d postgresql --api 
$ cd project-name
$ rails db:create 

```

* to view the versions of rails you have installed, and create a new rails project with a specific version of rails 
```
$ gem list rails local
$ rails _6.1.4.7_ new <project name> -d postgresql --api

```


## add gems 
* gems are third part libraries that do stuff
  - faker => allows us to create fake data for our projects
    (gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master')

  - pry-rails => help us debug 
   ("gem "pry-rails"" - under :development :test section of gemfile )
  - devise-token-auth => help with auth on the backend 
    (gem 'devise_token_auth' - in production section of gemfile)
  - 
* to add a gem: 
  - add gem to your gem file 
  -run bundle to install gem 

## notes about versioning (related to 3rd party libraries)

* before a library/product goes from one version to another(major)
* pre release version
* alpha release: could be very buggy; not widely tested
* beta release: more tested, less buggy, but not stable 
* RC release candidate; candidate for product-release 

* MajorChange.MinorChange.Patch
my3rdPartyLib is version 6.7.3
#some patch: bug fixes made (safe to upgrade)
 - minor change: small improvements  added but no breaking changes so should be safe to upgrade 
 - major update: new features (big improvements) potentially breaks code 

NOTE: to add a gem... add it to your gemfile, then run bundle to install gem

##devise token auth setup (backend)
 1. add to gem file
 
 #using this in our gemfile might want to use version <6.2> of rails) 

```
$ rails db:migrate
```
## Front end Setup

* in rails project, create a react-app
why in rails app? 
- a good way to keep it organized
- also i can share a github repo so prevent the eed to have a client repo and a backend repo

why called client? alias for the front end e.g. 'client does an api call' 

```
yarn create react-app client 

```
## add third party packages (more can always be added later)
- react-router-dom
- axios
- react-bootstrap
- axios-hooks 
```
//in client directory 
$ yarn add react-router-dom axios 
$ yarn add react-bootstrap bootstrap@5.1.3 
 
```
# add proxy
* add to package.json - add anywhere at route level 

"proxy": "http://localhost:3001",


## folder structure 
-no set way to do this; just depends on your project and preferences 
- assuming you're in the client directory
in terminal: 
```
$ mkdir src/components
$ mkdir src/providers
$ mkdir src/hooks
$ mkdir src/components/auth
$ mkdir src/components/shared 
```

## react router basic setup 

* add routes to index.js/app.js 
* index.js, wrap BrowserRouter
* create a navbar 

## Authentication Setup (using a provider)
