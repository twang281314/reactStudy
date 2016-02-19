[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

# React Tutorial

This is the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## To use

There are several simple server implementations included. They all serve static files from `public/` and handle requests to `/api/comments` to fetch or add data. Start a server with one of the following:

### Node

```sh
npm install
node server.js
```

### Python

```sh
pip install -r requirements.txt
python server.py
```

### Ruby
```sh
ruby server.rb
```

### PHP
```sh
php server.php
```

### Go
```sh
go run server.go
```

### Perl

```sh
cpan Mojolicious
perl server.pl
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
We'll provide:

    A view of all of the comments
    A form to submit a comment
    Hooks for you to provide a custom backend

It'll also have a few neat features:

    Optimistic commenting: comments appear in the list before they're saved on the server so it feels fast.
    Live updates: other users' comments are popped into the comment view in real time.
    Markdown formatting: users can use Markdown to format their text.

Project Structure

- CommentBox
  - CommentList
    - Comment
  - CommentForm
