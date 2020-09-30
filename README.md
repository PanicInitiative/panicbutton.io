[![Stories in Ready](https://badge.waffle.io/PanicInitiative/panicbutton.io.png?label=ready&title=Ready)](https://waffle.io/PanicInitiative/panicbutton.io)

Panic Button Website
====================

This is the source code for the https://panicbutton.io website.

It's using the `github-pages` version of Jekyll.

## Development

On OSX
  * install rvm 
  * `rvm use ruby-2.1.2`
  * `bundle install`
  * `jekyll serve`
  * You might need to `export LANG="en_US.UTF-8"` and `export LC_ALL="en_US.UTF-8"`

You should then be able to access the site locally on http://127.0.0.1:4000/

## Deploy

 * ```jekyll build --safe``` to build for production before manually pushing to ```gh-pages``` branch. 

## Notes

  * The `api` structure was used to providing live changes to the mobile app's static content (wizard pages and user routes, help content) but it no longer used live. It can still be used to generate the JSON files that are used by the app (only now statically bundled in the android apk)
