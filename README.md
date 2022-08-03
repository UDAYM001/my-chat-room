<p align="center" >
    <p align="center" >
        <a href="https://chatengine.io/">
            <img    
                alt="react-chat-engine-pretty" 
                style='max-height: 333px; max-width: 100%;'
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/pretty/thumbnail.png" 
            />
        </a>
    </p>
</p>

# Chat Engine ✨Pretty✨

## How to add chat to a Django / React Project.

This is an example of how to add chat into an existing project within minutes.

Chat Engine is a devevloper friendly Chat UI Kit. Setup a free plan at [chatengine.io](https://chatengine.io)

## ☕️ Start Frontend with NPM

```
cd frontend-react/
npm install
npm run start
```

## 🐳 Start Backend on Docker

Create an `env` file in `backend-django/env` and populate the Project ID and Private Key

```
PROJECT_ID=XXX
PRIVATE_KEY=YYY
```

Then build and run with Docker.

```
cd backend-django/
docker build . --tag django-react-chat
docker run -p 8000:8080 --env-file ./env django-react-chat
```

Stop with the following commands:

```
docker ps
docker stop <ID>
```

## 🪝 Rest API Docs

https://documenter.getpostman.com/view/3996315/UVyysCNK

## 📢 Feature Requests / Feedback

Please be vocal! Feel free to open a GitHub issue or email me at adam@lamorre.co for commercial inquires.
